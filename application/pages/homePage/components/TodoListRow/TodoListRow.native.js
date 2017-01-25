import React from 'react'
import { View, Text, StyleSheet, Animated, Image, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

import styles from './TodoListRow.style'

export default class TodoListViewRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 250,
        }).start();
    }

    handleTodoDelete = () => {
        this.props.handleTodoDelete(this.props.todo);
    };

    render() {
        return (
            <Animated.View style={[styles.container, {opacity: this.state.opacity}]}>
                <View style={styles.textContainer}>
                    <Text style={styles.text} numberOfLines={1} onPress={() => Actions.todoAppEdit(this.props.todo)}>
                        {this.props.todo.title}
                    </Text>
                </View>
                <TouchableHighlight onPress={this.handleTodoDelete}>
                    <Image
                        style={styles.deleteIcon}
                        source={require('../../../../assets/images/delete_icon.png')} />
                </TouchableHighlight>
            </Animated.View>
        )
    }
}