import React from 'react';
import {TouchableOpacity} from 'react-native';

export default class Touchable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity {...this.props}>
                {this.props.children}
            </TouchableOpacity>
        )
    }
}