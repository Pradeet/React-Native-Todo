import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class TodoActivity extends Component {

    constructor(props) {
        super(props);

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
                <TodoInput onChange={this.handleTodoInsert}/>
                <TodoList todos={this.state.todos}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
    },
});