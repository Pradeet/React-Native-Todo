import {StyleSheet} from 'react-native';

let inputBGColor = '#f7f9fc';
let BGcolor = '#F8F8F8';
let inputPad = 16;
let selectViewHeight = 46;

export default StyleSheet.create({
    Container: {
        backgroundColor: inputBGColor,
        flexDirection: 'row',
        height: selectViewHeight,
        alignItems: 'center',
        flex: 1,
        paddingLeft: inputPad,
        paddingRight: inputPad,
    },
    Icon: {
        height: 18,
        width: 18,
        marginRight: inputPad,
    },
    Hint: {
        flex: 1,
        fontSize: 15,
    },
    Text: {
        fontSize: 11,
        color: '#A5A5A5',
        paddingRight: 8,
    },
    Arrow: {
        fontSize: 18,
        color: '#A5A5A5',
    },
})