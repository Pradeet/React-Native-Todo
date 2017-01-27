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
        fontSize: 15,
    },
    labelInputContainer: {
        backgroundColor: inputBGColor,
        flexDirection: 'row',
    },
    datePicker: {
        flex: 1,
        paddingRight: 10,
        paddingTop: 8,
    }
})