import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

import ToolBar from '../../../../helpers/ToolBar';

import styles from './TodoDetailsPage.style'

export default class TodoDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            date: this.props.date,
            label: this.props.label,
            isEdited: false,
        }
    }

    handleSubmit = () => {
        console.log('Submitting edited todo');
        if (this.state.isEdited) {
            this.props.handleTodoEdit({
                title: this.state.title,
                date: this.state.date,
                label: this.state.label,
            })
        }
    };

    handleBackPress = () => {
        Actions.pop();
    };

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title="Todo List" onBackPress={this.handleBackPress} onSubmitButton={this.handleSubmit}/>
                <Text>{this.state.title}</Text>
                <Text>{this.state.date}</Text>
                <Text>{this.state.label}</Text>
            </View>
        )
    }
}