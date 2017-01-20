import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import * as firebase from 'firebase';

export default class TodoActivity extends Component {

    constructor(props) {
        super(props);

        this.todoRef = firebase.database().ref().child('todos');
        this.state = {
            todos: ['Clean Code'],
        };
    }

    handleTodoInsert = (value) => {
        console.log(value);
        this.setState({
            todos: this.state.todos.concat([value]),
        }, () => {
            console.log(this.state.todos)
        });
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
        backgroundColor: '#48afdb',
        paddingTop: 30,
        paddingBottom: 10,
        flexDirection: 'row'
    },
    titleText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: 20,
    },
});