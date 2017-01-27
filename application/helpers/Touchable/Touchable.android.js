import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';

export default class Touchable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}>
                <View style={this.props.style}>
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        )
    }
}