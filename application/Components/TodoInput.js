import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

export default class TodoInput extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            text: '',
        }
    }

    onSubmit() {
        this.props.onChange(this.state.text);
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
        backgroundColor: '#C1C1C1',
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