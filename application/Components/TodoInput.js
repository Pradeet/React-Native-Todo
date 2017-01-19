import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class TodoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})} />
            </View>
        )
    }
}