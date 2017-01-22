import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class ProfileListViewHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleSearchBar = (text) => {
        this.setState({
            text: text,
        });
        this.props.onChange(text)
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.text}
                    style={styles.input}
                    placeholder="Search..."
                    onChangeText={(text) => this.handleSearchBar(text)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C1C1C1',
    },
    input: {
        height: 30,
        flex: 1,
        paddingHorizontal: 8,
        fontSize: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },
});