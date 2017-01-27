import {StyleSheet} from 'react-native';

let inputBGColor = '#f7f9fc';
let inputPad = 16;

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#eaf0f9',
    },
    inputArea: {
        flexDirection: 'column',
    },
    titleInputContainer: {
        backgroundColor: inputBGColor,
        flexDirection: 'column',
        paddingLeft: inputPad,
        paddingRight: inputPad,
        flex: 1,
        justifyContent: 'center',
    },
    titleInput: {
        height: 52,
        fontSize: 16,
    },
    labelInputContainer: {
        backgroundColor: inputBGColor,
        flexDirection: 'row',
        height: 38,
        paddingLeft: inputPad,
        paddingRight: inputPad,
        alignItems: 'center',
        flex: 1,
    },
    labelInputIcon: {
        height: 18,
        width: 18,
        marginRight: inputPad,
    },
    labelInputHint: {
        flex: 1,
        fontSize: 15,
    },
    labelInputText: {
        fontSize: 11,
        color: '#a9acb2',
    },
    labelInputArrow: {
        fontSize: 18,
        color: '#a9acb2',
    },
    datePicker: {
        flex: 1,
        paddingRight: 10,
        paddingTop: 8,
    },
    bigSeperator: {
        backgroundColor: '#eaf0f9',
        height: 20,
    }
})