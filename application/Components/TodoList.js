import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

export default class TodoList extends Component {

    constructor(props){
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.todos),
        };
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <View><Text>{data}</Text></View>}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexGrow: 1,
        backgroundColor: 'white',
        marginTop: 20,
    }
});