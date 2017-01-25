import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        marginLeft: 12,
        flex: 1,
    },
    text: {
        fontSize: 16,
        flex: 1,
    },
    deleteIcon: {
        height: 20,
        width: 20,
        marginRight: 12,
        flexShrink: 0,
    }
});