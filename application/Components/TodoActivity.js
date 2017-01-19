import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default class TodoActivity extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TodoInput />
                <TodoList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'red',
    },
});