import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker'
// import FloatLabelTextInput from 'react-native-floating-label-text-input';
// import ListViewSelect from 'react-native-list-view-select';

import ToolBar from '../../../../helpers/ToolBar';
import Seperator from '../../../../helpers/Seperator';
// import labels from '../../../../data/demoLabels';
import TextInput from '../../../../helpers/TextInput';

import styles from './TodoDetailsPage.style';

export default class TodoDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.isEdited= false;
        this.state = {
            title: props.title,
            date: (props.hasOwnProperty('date')) ? props.date : new Date(),
            label: (props.hasOwnProperty('label')) ? props.label : 'Personal',
            isLabelListVisible: false,
        }
    }

    handleSubmit = () => {
        console.log('Submitting edited todo');
        if (this.state.isEdited) {
            this.props.handleTodoEdit({
                title: this.title,
                date: this.date,
                label: this.label,
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
                    <Seperator />
                    {this.renderDatePicker()}
                </ScrollView>
            </View>
        )
    }

    renderTitleInput = () => {
        return (
            <TextInput
                placeholder={'Title'}
                value={this.state.title}
                onChangeText={this.setTitle}/>
        )
    };

    renderLabelInput = () => {
        return (
            <TextInput
                placeholder={'Label'}
                value={this.state.label}
                onChangeText={this.setLabel}/>
        )
    };

    renderDatePicker = () => {
        return (
            <View style={styles.datePicker}>
                <TouchableOpacity onPress={this._showDateTimePicker}>
                    <Text>{this.state.date.toDateString()}</Text>
                </TouchableOpacity>
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