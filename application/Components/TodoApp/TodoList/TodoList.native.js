import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';

import Row from '../TodoListViewRow/TodoListViewRow.native';

import styles from './TodoList.style';

export default class TodoList extends Component {

    constructor(props){
        super(props);

        this.state = {
            ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
    }

    handleTodoDelete = (todo) => {
        this.props.handleTodoDelete(todo);
    };

    renderRow = (todo) => {
        console.log('Printing row data ----- ', todo);
        return (
            <Row todo={todo} handleTodoDelete={this.handleTodoDelete}/>
        )
    };

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.ds.cloneWithRows(this.props.todos)}
                renderRow={(todo) => this.renderRow(todo)}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        );
    }
}