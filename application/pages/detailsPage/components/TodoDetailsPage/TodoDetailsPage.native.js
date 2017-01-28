import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker'

import ToolBar from '../../../../helpers/ToolBar';
import Seperator from '../../../../helpers/Seperator';
import TextInput from '../../../../helpers/TextInput';
import Touchable from '../../../../helpers/Touchable';
import SvgFlagIcon from '../../../../helpers/SvgFlagIcon';

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
            reminder: 'No Reminders',
            priority: 4,
        };
        this.state = {
            id: this.todo.id,
            title: this.todo.title,
            date: (this.todo.hasOwnProperty('date')) ? new Date(this.todo.date) : new Date(),
            label: (this.todo.hasOwnProperty('label')) ? this.todo.label : 'Personal',
            reminder: (this.todo.hasOwnProperty('reminder')) ? this.todo.reminder : 'No Reminders',
            priority: (this.todo.hasOwnProperty('priority')) ? this.todo.priority : 4,
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
                    <View style={styles.bigSeperator} />
                    <Seperator />
                    {this.renderDatePicker()}
                    <Seperator />
                    {this.renderReminderInput()}
                    <Seperator />
                    <View style={styles.bigSeperator} />
                    <Seperator />
                    {this.renderPriorityInput()}
                    <Seperator />
                    <View style={styles.bigSeperator} />
                    <Seperator />
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
                <Text style={styles.labelInputText}>{this.state.label}</Text>
                <Text style={styles.labelInputArrow}>{'>'}</Text>
            </Touchable>
        )
    };

    renderDatePicker = () => {
        return (
            <View style={styles.datePickerContainer}>
                <Touchable style={styles.datePicker} onPress={this._showDateTimePicker}>
                    <Text style={styles.dateText}>{this._getDateTime(this.state.date)}</Text>
                    <Image
                        style={styles.calendarIcon}
                        source={require('../../../../assets/images/calendar.jpg')} />
                </Touchable>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    mode="datetime"
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker} />
            </View>
        )
    };

    _getDateTime = (date) => {
        let d = date.toDateString().split(' ');
        console.log(d);
        return d[2] + ' ' + d[1] + ' ' + date.getHours() + ':' + date.getMinutes();
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
    };

    renderReminderInput = () => {
        return (
            <Touchable style={styles.labelInputContainer}>
                <Image
                    style={styles.labelInputIcon}
                    source={require('../../../../assets/images/clock.png')} />
                <Text style={styles.labelInputHint}>Reminders</Text>
                <Text style={styles.labelInputText}>{this.state.reminder}</Text>
                <Text style={styles.labelInputArrow}>{'>'}</Text>
            </Touchable>
        )
    };

    renderPriorityInput = () => {

        let flag1Color = (this.state.priority === 4) ? '#FFFFFF' : '#C9C9C9';
        getBGcolor = (priority) => {
            return (priority === this.state.priority) ? '#C9C9C9' : '#f7f9fc';
        };

        return (
            <View style={styles.labelInputContainer}>
                <View style={styles.labelInputIcon}>
                    <SvgFlagIcon color="#000000" size="14"/>
                </View>
                <Text style={styles.labelInputHint}>Priority</Text>
                <View style={styles.priorityFlagContainer}>
                    <Touchable
                        style={[styles.priorityIcon, {backgroundColor: getBGcolor(4), borderBottomLeftRadius:5, borderTopLeftRadius: 5}]}
                        onPress={() => this.handlePriorityChange(4)}>
                        <SvgFlagIcon color={flag1Color} size="14"/>
                    </Touchable>
                    <Touchable
                        style={[styles.priorityIcon, {backgroundColor: getBGcolor(3)}]}
                        onPress={() => this.handlePriorityChange(3)}>
                        <SvgFlagIcon color="#D6CB12" size="14"/>
                    </Touchable>
                    <Touchable
                        style={[styles.priorityIcon, {backgroundColor: getBGcolor(2)}]}
                        onPress={() => this.handlePriorityChange(2)}>
                        <SvgFlagIcon color="#DA6B1D" size="14"/>
                    </Touchable>
                    <Touchable
                        style={[styles.priorityIcon, {backgroundColor: getBGcolor(1), borderBottomRightRadius:5, borderTopRightRadius: 5}]}
                        onPress={() => this.handlePriorityChange(1)}>
                        <SvgFlagIcon color="#BC0010" size="14"/>
                    </Touchable>
                </View>
            </View>
        )
    };

    handlePriorityChange = (priority) => {
        this.setState({
            priority: priority,
        })
    }
}