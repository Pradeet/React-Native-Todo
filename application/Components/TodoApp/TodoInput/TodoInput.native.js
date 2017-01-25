import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, TouchableHighlight, Text} from 'react-native';

import styles from './TodoInput.style'

export default class TodoInput extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            text: '',
        }
    }

    onSubmit() {
        let text = this.state.text;
        let obj = {
            title: text,
            label: 'Shopping',
        };
        if (text !== '') {
            this.setState({
                text: '',
            }, () => {
                this.props.onChange(obj);
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.text}
                    style={styles.input}
                    placeholder="Type here to Add Todo"
                    onChangeText={(text) => this.setState({text})} />
                <TouchableHighlight
                    style={styles.button}
                    underlayColor='#DDD'
                    onPress={() => this.onSubmit()}>
                    <Text style={styles.btnText}>Add!</Text>
                </TouchableHighlight>
            </View>
        )
    }
}