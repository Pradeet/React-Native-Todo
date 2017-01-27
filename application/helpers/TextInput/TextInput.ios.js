import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './TextInput.style';

export default class MyTextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.value
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.hasOwnProperty('value') && newProps.value !== this.state.text) {
            this.setState({ text: newProps.value });
        }
    }

    render() {
        return (
            <TextInput
                style={styles.textInput}
                {...this.props}
                value={this.state.text}
            />
        )
    }
}