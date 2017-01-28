import React from 'react';
import {Image, Text} from 'react-native';

import Touchable from '../../../../helpers/Touchable';

import styles from './TodoDetailsSelectRow.style';

export default class TodoDetailsSelectRow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Touchable style={styles.Container}>
                <Image
                    style={styles.Icon}
                    source={require('../../../../assets/images/' + this.props.imagePath)} />
                <Text style={styles.Hint}>{this.props.hint}</Text>
                <Text style={styles.Text}>{this.props.text}</Text>
                <Text style={styles.Arrow}>{'>'}</Text>
            </Touchable>
        )
    }
}