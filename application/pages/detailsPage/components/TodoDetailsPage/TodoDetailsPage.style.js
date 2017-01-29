import {StyleSheet} from 'react-native';
import props from '../../constants/constants';

const viewContainers = {
    paddingLeft: props.fieldPading,
    paddingRight: props.fieldPading,
};

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: props.pageBackgroundColor,
    },
    inputArea: {
        flexDirection: 'column',
    },
    titleInputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: props.fieldBackgroundColor,
        ...viewContainers,
    },
    titleInput: {
        height: props.titleViewHeight,
        fontSize: props.titleFontSize,
    },
    fieldInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props.fieldBackgroundColor,
        height: props.fieldViewHeight,
        ...viewContainers
    },
    fieldInputIcon: {
        height: props.fieldIconSize,
        width: props.fieldIconSize,
        marginRight: props.fieldPading,
    },
    fieldInputHint: {
        flex: 1,
        fontSize: props.fieldHintFontSize,
    },
    fieldInputText: {
        fontSize: props.fieldTextFontSize,
        color: props.fieldTextColor,
        paddingRight: 8,
    },
    fieldInputArrow: {
        fontSize: props.fieldArrowFontSize,
        color: props.fieldArrowColor,
    },
    datePickerContainer: {
        flex: 1,
    },
    datePicker: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props.fieldBackgroundColor,
        height: props.fieldViewHeight,
        ...viewContainers,
    },
    dateText: {
        flex: 1,
        alignItems: 'center'
    },
    calendarIcon: {
        height: props.calenderIconSize,
        width: props.calenderIconSize,
    },
    priorityFlagContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: props.fieldBackgroundColor,
    },
    priorityIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: props.priorityIconSize,
        width: props.priorityIconSize,
        borderColor: props.priorityIconBorderColor,
        borderWidth: 0.5,
    },
    deleteButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.fieldBackgroundColor,
        height: props.fieldViewHeight,
        ...viewContainers
    },
    deleteText: {
        color: 'red',
        fontSize: props.fieldHintFontSize,
    },
    bigSeperator: {
        backgroundColor: props.bigSeperatorColor,
        height: props.bigSeperatorHeight,
    }
})