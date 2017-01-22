import React from 'react'
import { View, Text, StyleSheet} from 'react-native';

export default class TodoListViewRow extends React.Component {

    constructor(props) {
        super(props);
        console.log('YoYo ----- ', this.props.data.todo);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.data.todo}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
});