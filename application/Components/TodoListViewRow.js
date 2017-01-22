import React from 'react'
import { View, Text, StyleSheet, Animated, Image, TouchableHighlight} from 'react-native';

export default class TodoListViewRow extends React.Component {

    constructor(props) {
        super(props);

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

    handleTodoDelete = () => {
        this.props.handleTodoDelete(this.props.data);
    };

    render() {
        return (
            <Animated.View style={[styles.container, {opacity: this.state.opacity}]}>
                <Text style={styles.text} numberOfLines={1}>
                    {this.props.data.text.todo}
                </Text>
                <TouchableHighlight onPress={this.handleTodoDelete}>
                    <Image
                        style={styles.deleteIcon}
                        source={require('../assets/images/delete_icon.png')} />
                </TouchableHighlight>
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
        flex: 1,
    },
    deleteIcon: {
        height: 20,
        width: 20,
        marginRight: 12,
        flexShrink: 0,
    }
});