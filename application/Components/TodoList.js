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

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    render() {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <ListView
                style={styles.container}
                dataSource={ds.cloneWithRows(this.props.todos)}
                renderRow={(data) => <Row data={data} />}
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
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});