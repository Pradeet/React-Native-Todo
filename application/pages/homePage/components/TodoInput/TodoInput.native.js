import React, {Component} from 'react';
import {StyleSheet, View, Button, TouchableHighlight, Text} from 'react-native';

import TextInput from '../../../../helpers/TextInput';
import Touchable from '../../../../helpers/Touchable';

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
                <Touchable
                    style={styles.button}
                    underlayColor='#fff'
                    onPress={() => this.onSubmit()}>
                    <Text style={styles.btnText}>Add!</Text>
                </Touchable>
            </View>
        )
    }
}