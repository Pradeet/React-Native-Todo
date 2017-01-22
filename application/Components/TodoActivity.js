import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import * as firebase from "firebase";

export default class TodoActivity extends Component {

    constructor(props) {
        super(props);

        this.todoRef = firebase.database().ref().child("todos");
        this.todoRef.once('value').then((snap) => {
            this.state = {
                todos: Object.keys(snap).map((data) => ({
                    id: data.key,
                    text: data.val()
                }))
            }
        }).catch((error) => {
            console.log('Error ------- ', error)
        });
        this.state = {
            todos: [],
        }
    }

    componentDidMount() {
        this.todoRef.on("child_added", (snap) => {
            console.log('In Child_added ------', snap.val());
            this.setState({
                todos: this.state.todos.concat([{
                    id: snap.key,
                    text: snap.val(),
                }])
            })
        });

        this.todoRef.on("child_removed", (snap) => {
            console.log(snap);
            this.setState({
                todos: this.state.todos.filter((x => {
                    return (x.id !== snap.key)
                }))
            })
        });
    }

    handleTodoInsert = (value) => {
        console.log('My Log ----', value);
        if (value !== '') {
            this.todoRef.push({
                todo: value,
            })
        }
        console.log('My Log ----', value);
    };

    handleTodoRemove = (todo) => {
        this.todoRef.child(todo.id).remove();
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>
                        Todo List
                    </Text>
                </View>
                <TodoInput onChange={this.handleTodoInsert}/>
                <TodoList todos={this.state.todos}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleView: {
        backgroundColor: "#48afdb",
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: "row"
    },
    titleText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        flex: 1,
        fontSize: 20,
    },
});