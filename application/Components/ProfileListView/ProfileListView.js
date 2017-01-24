import React, {Component} from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native';
import {default as Row} from './ProfileListViewRow'
import data from '../../Data/demoData'
import {default as Header} from './ProfileListViewHeader'

export default class ProfileListView extends Component {

    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: this.ds.cloneWithRows(data),
            searchText: '',
        };
    }

    handleSearchBar = (text) => {
        let re = new RegExp("\w*" + text.toLowerCase() + "\w*");
        let filteredData = data.filter((entry) => {
            let fullname = entry.name.first + ' ' + entry.name.last;
            if(entry.name.first.match(re) || entry.name.last.match(re) || fullname.match(re)) {
                return entry;
            }
        });

        this.setState({
            searchText: text,
            dataSource: this.ds.cloneWithRows(filteredData),
        })
    };

    renderRow(data) {
        return (
            <Row {...data} />
        )
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => renderRow(data)}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                renderHeader={() => <Header onChange={this.handleSearchBar}/>}
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