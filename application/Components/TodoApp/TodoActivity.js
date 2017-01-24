import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import * as firebase from "firebase";
import ToolBar from './helpers/ToolBar'

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
            this.setState({
                todos: this.state.todos.concat([{
                    id: snap.key,
                    text: snap.val(),
                }])
            })
        });

        this.todoRef.on("child_removed", (snap) => {
            this.setState({
                todos: this.state.todos.filter((x => {
                    return (x.id !== snap.key)
                }))
            })
        });
    }

    handleTodoInsert = (value) => {
        if (value !== '') {
            this.todoRef.push({
                todo: value,
            })
        }
    };

    handleTodoRemove = (todo) => {
        this.todoRef.child(todo.id).remove();
    };

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title="Todo List" disableBackPress={true}/>
                <TodoInput onChange={(value) => this.handleTodoInsert}/>
                <TodoList todos={this.state.todos} handleTodoDelete={this.handleTodoRemove}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});