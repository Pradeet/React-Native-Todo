import React, {Component} from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native';
import Row from './ListViewDemoRow'
import data from '../Data/demoData'
import ListViewDemoHeader from './ListViewDemoHeader'

export default class ListViewDemo extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <Row {...data} />}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                renderHeader={() => <ListViewDemoHeader />}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});