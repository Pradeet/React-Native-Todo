import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import {default as Row} from './TodoListViewRow';

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

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.ds.cloneWithRows(this.props.todos)}
                renderRow={(data) => <Row data={data} handleTodoDelete={this.handleTodoDelete}/>}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexGrow: 1,
        backgroundColor: 'white',
    },
    separator: {
        flex: 1,
        marginRight: 12,
        marginLeft: 12,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});