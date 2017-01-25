import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop: 5,
        padding: 10,
        flexDirection: 'row'
    },
    input: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#48afdb',
        borderRadius: 4,
        color: '#48BBEC'
    },
    button: {
        height: 36,
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#48afdb',
        justifyContent: 'center',
        borderRadius: 4,
    },
    btnText: {
        fontSize: 18,
        color: '#fff',
        marginTop: 6,
    },
})