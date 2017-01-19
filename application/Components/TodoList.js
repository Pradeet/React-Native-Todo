import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TodoList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is TodoList</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'blue',
    }
});