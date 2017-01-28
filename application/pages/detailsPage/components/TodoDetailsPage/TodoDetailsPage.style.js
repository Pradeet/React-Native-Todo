import {StyleSheet} from 'react-native';

let inputBGColor = '#f7f9fc';
let BGcolor = '#F8F8F8';
let inputPad = 16;
let selectViewHeight = 46;

const viewContainers = {
    paddingLeft: inputPad,
    paddingRight: inputPad,
};

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: BGcolor,
    },
    inputArea: {
        flexDirection: 'column',
    },
    titleInputContainer: {
        backgroundColor: inputBGColor,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        ...viewContainers,
    },
    titleInput: {
        height: 52,
        fontSize: 16,
    },
    labelInputContainer: {
        backgroundColor: inputBGColor,
        flexDirection: 'row',
        height: selectViewHeight,
        alignItems: 'center',
        flex: 1,
        ...viewContainers
    },
    labelInputIcon: {
        height: 14,
        width: 14,
        marginRight: inputPad,
    },
    labelInputHint: {
        flex: 1,
        fontSize: 15,
    },
    labelInputText: {
        fontSize: 11,
        color: '#A5A5A5',
        paddingRight: 8,
    },
    labelInputArrow: {
        fontSize: 18,
        color: '#A5A5A5',
    },
    datePickerContainer: {
        flex: 1,
    },
    datePicker: {
        ...viewContainers,
        backgroundColor: inputBGColor,
        height: selectViewHeight,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        flex: 1,
        alignItems: 'center'
    },
    calendarIcon: {
        height: 18,
        width: 18,
    },
    priorityFlagContainer: {
        flexDirection: 'row',
        flex: 0,
    },
    priorityIcon: {
        height: 14,
        width: 14,
    },
    bigSeperator: {
        backgroundColor: '#eaf0f9',
        height: 24,
    }
})