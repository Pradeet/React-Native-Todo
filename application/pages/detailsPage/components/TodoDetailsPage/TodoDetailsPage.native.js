import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker'

import ToolBar from '../../../../helpers/ToolBar';
import Seperator from '../../../../helpers/Seperator';
import TextInput from '../../../../helpers/TextInput';
import Touchable from '../../../../helpers/Touchable';

import styles from './TodoDetailsPage.style';

export default class TodoDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.isEdited= false;
        this.todo = {
            id: '-KbKf6pHx3nzdK_0gN1Q',
            title: "This is nothing",
            label: "Shopping",
            date: new Date("2017-02-27T11:14:13.000Z"),
        };
        this.state = {
            id: this.todo.id,
            title: this.todo.title,
            date: (this.todo.hasOwnProperty('date')) ? new Date(this.todo.date) : new Date(),
            label: (this.todo.hasOwnProperty('label')) ? this.todo.label : 'Personal',
            isLabelListVisible: false,
        }
    }

    handleSubmit = () => {
        console.log('Submitting edited todo');
        if (this.isEdited) {
            console.log('The data is edited');
            this.props.handleTodoEdit({
                id: this.state.id,
                title: this.state.title,
                date: this.state.date,
                label: this.state.label,
            });
            Actions.pop();
        }
    };

    handleBackPress = () => {
        Actions.pop();
    };

    showLabelList = () => {
        this.setState({isLabelListVisible: true});
    };

    closeLabelList = () => {
        this.setState({isLabelListVisible: false});
    };

    setLabel = (label) => {
        if(label !== this.state.label){
            this.setState({ label: label});
            this.isEdited = true;
        }
    };

    setTitle = (text) => {
        this.setState({
            title: text,
        });
        this.isEdited = true;
    };

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title="Todo List" onBackPress={this.handleBackPress} onSubmitButton={this.handleSubmit}/>
                <ScrollView style={styles.inputArea}>
                    {this.renderTitleInput()}
                    <Seperator />
                    {this.renderLabelInput()}
                    <View style={styles.bigSeperator} />
                    {this.renderDatePicker()}
                </ScrollView>
            </View>
        )
    }

    renderTitleInput = () => {
        return (
            <View style={styles.titleInputContainer}>
                <TextInput
                    placeholder={'Title'}
                    style={styles.titleInput}
                    value={this.state.title}
                    onChangeText={this.setTitle}/>
            </View>
        )
    };

    renderLabelInput = () => {
        return (
            <Touchable style={styles.labelInputContainer}>
                <Image
                    style={styles.labelInputIcon}
                    source={require('../../../../assets/images/document_icon.png')} />
                <Text style={styles.labelInputHint}>Project</Text>
                <Text style={styles.labelInputText}>{this.todo.label}</Text>
                <Text style={styles.labelInputArrow}>{' >'}</Text>
            </Touchable>
        )
    };

    renderDatePicker = () => {
        return (
            <View style={styles.datePicker}>
                <Touchable onPress={this._showDateTimePicker}>
                    <Text>{this.state.date.toDateString()}</Text>
                </Touchable>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker} />
            </View>
        )
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({
            date: date,
        });
        this.isEdited = true;
        this._hideDateTimePicker()
    }
}