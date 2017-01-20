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
        let text = this.state.text;
        this.setState({
            text: ' ',
        }, () => {
            this.props.onChange(text);
        })
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
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#C1C1C1',
    },
    input: {
        height: 40,
        padding: 8,
        backgroundColor: '#FFF',
        flexGrow: 1,
    },
    submit: {
        height: 40,
    }
});