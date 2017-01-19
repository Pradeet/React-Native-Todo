import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default class TodoInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
        }
    }

    onSubmit() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})} />
                <Button
                    style={styles.submit}
                    title='Add'
                    color="black"
                    onPress={this.onSubmit} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 7,
        flexDirection: 'row',
    },
    input: {
        height: 40,
        flexGrow: 1,
    },
    submit: {
        backgroundColor: 'blue',
        height: 40,
    }
});