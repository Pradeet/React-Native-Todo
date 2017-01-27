import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
    textInput: {
        height: (Platform.OS === 'ios') ? 36 : 40,
        fontSize: 16,
        color: '#111111',
    }
})