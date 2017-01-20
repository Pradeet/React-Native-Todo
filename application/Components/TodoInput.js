import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, TouchableHighlight, Text} from 'react-native';

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
        if (text === '') {
            return
        }
        this.setState({
            text: '',
        }, () => {
            this.props.onChange(text);
        })
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

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        padding: 10,
        flexDirection: 'row'
    },
    input: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#48afdb',
        borderRadius: 4,
        color: '#48BBEC'
    },
    button: {
        height: 36,
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#48afdb',
        justifyContent: 'center',
        borderRadius: 4,
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 6,
    },
});