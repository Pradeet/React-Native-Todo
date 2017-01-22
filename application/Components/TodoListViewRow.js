import React from 'react'
import { View, Text, StyleSheet, Animated} from 'react-native';

export default class TodoListViewRow extends React.Component {

    constructor(props) {
        super(props);
        // console.log('YoYo ----- ', this.props.data.todo);

        this.state = {
            opacity: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 250,
        }).start();
    }

    render() {
        return (
            <Animated.View style={[styles.container, {opacity: this.state.opacity}]}>
                <Text style={styles.text}>
                    {this.props.data.todo}
                </Text>
            </Animated.View>
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