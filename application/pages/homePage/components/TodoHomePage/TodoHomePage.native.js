import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import * as firebase from "firebase";

import TodoInput from "../TodoInput";
import TodoList from "../TodoList";
import ToolBar from '../../../../helpers/ToolBar'
import demoTodos from '../../../../data/demoTodos'

import styles from './TodoHomePage.style'

export default class TodoActivity extends Component {

    constructor(props) {
        super(props);

        this.todoRef = firebase.database().ref().child("todos");
        this.state = {
            // todos: demoTodos,
            todos: [],
        }
    }

    componentDidMount() {
        this.todoRef.on("child_added", (snap) => {
            console.log('Called child_added');
            this.setState({
                todos: this.state.todos.concat([{
                    id: snap.key,
                    ...snap.val(),
                }])
            }, () => {
                console.log('All todos ----- ', this.state.todos)
            })
        });

        this.todoRef.on("child_removed", (snap) => {
            console.log('Called child_removed');
            this.setState({
                todos: this.state.todos.filter((x => {
                    return (x.id !== snap.key)
                }))
            })
        });

        this.todoRef.on('child_changed', (snap) => {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    if (todo.id === snap.key) {
                        return {
                            id: snap.key,
                            ...snap.val(),
                        }
                    } else {
                        return todo;
                    }
                })
            })
        });
    }

    handleTodoInsert = (value) => {
        if (value !== '') {
            // for testing purpose.
            // this.setState({
            //     todos: this.state.todos.concat({
            //         ...value,
            //     })
            // });

            // for firebase
            this.todoRef.push({
                ...value,
            });
        }
    };

    handleTodoRemove = (todo) => {
        this.todoRef.child(todo.id).remove();
    };

    handleTodoEdit = (newTodo) => {
        let currentRef = this.todoRef.child(newTodo.id);
        delete newTodo.id;
        currentRef.update(newTodo);
    };

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title="Todo List" disableBackPress={true}/>
                <TodoInput onChange={this.handleTodoInsert}/>
                <TodoList todos={this.state.todos} handleTodoDelete={this.handleTodoRemove} handleTodoEdit={this.handleTodoEdit}/>
            </View>
        );
    }
}