import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import DateTimePicker from 'react-native-modal-datetime-picker'

import ToolBar from '../../../../helpers/ToolBar';
import Seperator from '../../../../helpers/Seperator';
import TextInput from '../../../../helpers/TextInput';
import Touchable from '../../../../helpers/Touchable';
import SvgFlagIcon from '../../../../helpers/SvgFlagIcon';

import constants from '../../constants/constants';
import styles from './TodoDetailsPage.style';

export default class TodoDetailsPage extends React.Component {

    constructor(props) {
        super(props);
        this.isEdited= false;
        this.todo = {
            id: '-KbKf6pHx3nzdK_0gN1Q',
            title: "This is nothing",
            project: "Shopping",
            date: new Date("2017-02-27T11:14:13.000Z"),
            reminder: 'No Reminders',
            priority: 4,
        };
        this.state = {
            id: props.todo.id,
            title: props.todo.title,
            date: (props.todo.hasOwnProperty('date')) ? new Date(props.todo.date) : new Date(),
            project: (props.todo.hasOwnProperty('project')) ? props.todo.project : 'Personal',
            reminder: (props.todo.hasOwnProperty('reminder')) ? props.todo.reminder : 'No Reminders',
            priority: (props.todo.hasOwnProperty('priority')) ? props.todo.priority : 4,
            label: (props.todo.hasOwnProperty('labels')) ? props.todo.label : 'No Labels',
            parent: (props.todo.hasOwnProperty('parents')) ? props.todo.parent : 'No Parents',
        }
    }

    getTodo = () => {
        return {
            id: this.state.id,
            title: this.state.title,
            date: this.state.date,
            project: this.state.project,
            reminder: this.state.reminder,
            priority: this.state.priority,
            label: this.state.label,
            parent: this.state.parent,
        }
    };

    handleSubmit = () => {
        this.props.handleTodoEdit(this.getTodo());
        Actions.pop();
    };

    handleBackPress = () => {
        Actions.pop();
    };

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title="Todo List" onBackPress={this.handleBackPress} onSubmitButton={this.handleSubmit}/>
                <ScrollView style={styles.inputArea}>
                    {this.renderTitleInput()}
                    <Seperator />
                    {this.renderProjectInput()}
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
                    {this.renderLabelInput()}
                    <Seperator />
                    {this.renderParentInput()}
                    <Seperator />
                    <View style={styles.bigSeperator} />
                    <Seperator />
                    {this.renderDeleteButton()}
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

    setTitle = (text) => {
        this.setState({
            title: text,
        });
        this.isEdited = true;
    };

    renderProjectInput = () => {
        // TODO: implement project select.
        return (
            <Touchable style={styles.fieldInputContainer}>
                <Image
                    style={styles.fieldInputIcon}
                    source={require('../../../../assets/images/document_icon.png')} />
                <Text style={styles.fieldInputHint}>Project</Text>
                <Text style={styles.fieldInputText}>{this.state.project}</Text>
                <Text style={styles.fieldInputArrow}>{'>'}</Text>
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
                    date={this.state.date}
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
        // TODO: implement Remainder input.
        return (
            <Touchable style={styles.fieldInputContainer}>
                <Image
                    style={styles.fieldInputIcon}
                    source={require('../../../../assets/images/clock.png')} />
                <Text style={styles.fieldInputHint}>Reminders</Text>
                <Text style={styles.fieldInputText}>{this.state.reminder}</Text>
                <Text style={styles.fieldInputArrow}>{'>'}</Text>
            </Touchable>
        )
    };

    renderPriorityInput = () => {

        let p4FlagColor = (this.state.priority === 4) ? constants.priority4FlagColorSelected : constants.priority4FlagColor;
        getBGcolor = (priority) => {
            return (priority === this.state.priority) ? constants.priority4FlagColor : constants.fieldBackgroundColor;
        };

        return (
            <View style={styles.fieldInputContainer}>
                <View style={styles.fieldInputIcon}>
                    <SvgFlagIcon color="#000000" size={constants.fieldIconSize}/>
                </View>
                <Text style={styles.fieldInputHint}>Priority</Text>
                <View style={styles.priorityFlagContainer}>
                    <Touchable
                        style={[styles.priorityIcon, {
                            backgroundColor: getBGcolor(4),
                            borderBottomLeftRadius: constants.priorityBorderRadius,
                            borderTopLeftRadius: constants.priorityBorderRadius
                        }]}
                        onPress={() => this.handlePriorityChange(4)}>
                        <SvgFlagIcon color={p4FlagColor} size={constants.fieldIconSize}/>
                    </Touchable>
                    <Touchable
                        style={[styles.priorityIcon, {backgroundColor: getBGcolor(3)}]}
                        onPress={() => this.handlePriorityChange(3)}>
                        <SvgFlagIcon color="#D6CB12" size={constants.fieldIconSize}/>
                    </Touchable>
                    <Touchable
                        style={[styles.priorityIcon, {backgroundColor: getBGcolor(2)}]}
                        onPress={() => this.handlePriorityChange(2)}>
                        <SvgFlagIcon color="#DA6B1D" size={constants.fieldIconSize}/>
                    </Touchable>
                    <Touchable
                        style={[styles.priorityIcon, {
                            backgroundColor: getBGcolor(1),
                            borderBottomRightRadius: constants.priorityBorderRadius,
                            borderTopRightRadius: constants.priorityBorderRadius
                        }]}
                        onPress={() => this.handlePriorityChange(1)}>
                        <SvgFlagIcon color="#BC0010" size={constants.fieldIconSize}/>
                    </Touchable>
                </View>
            </View>
        )
    };

    handlePriorityChange = (priority) => {
        this.setState({
            priority: priority,
        })
    };

    renderLabelInput = () => {
        return (
            <Touchable style={styles.fieldInputContainer}>
                <Image
                    style={styles.fieldInputIcon}
                    source={require('../../../../assets/images/label_icon.png')} />
                <Text style={styles.fieldInputHint}>Labels</Text>
                <Text style={styles.fieldInputText}>{this.state.label}</Text>
                <Text style={styles.fieldInputArrow}>{'>'}</Text>
            </Touchable>
        )
    };

    setLabel = (label) => {
        if(label !== this.state.label){
            this.setState({ label: label});
            this.isEdited = true;
        }
    };

    renderParentInput = () => {
        // TODO: implement Parent change handler.
        return (
            <Touchable style={styles.fieldInputContainer}>
                <Image
                    style={styles.fieldInputIcon}
                    source={require('../../../../assets/images/document_icon.png')} />
                <Text style={styles.fieldInputHint}>Parent</Text>
                <Text style={styles.fieldInputText}>{this.state.parent}</Text>
                <Text style={styles.fieldInputArrow}>{'>'}</Text>
            </Touchable>
        )
    };

    renderDeleteButton = () => {
        return (
            <Touchable style={styles.deleteButtonContainer} onPress={this.handleDeleteButton}>
                <Text style={styles.deleteText}>Delete Todo</Text>
            </Touchable>
        )
    };

    handleDeleteButton = () => {
        this.props.handleTodoDelete(this.getTodo());
        Actions.pop();
    };
}