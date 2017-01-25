import React from 'react';

import {Text, Button, StyleSheet, View, TouchableHighlight, Image} from 'react-native';

export default class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableBackPress: !(props.hasOwnProperty('onBackPress')),
            disableSubmitButton: !(props.hasOwnProperty('onSubmitButton')),
            submitText: (props.hasOwnProperty('submitText')) ? props.submitText : 'save',
        }
    }

    renderBackPress = () => {
        if(!this.state.disableBackPress) {
            return(
                <TouchableHighlight onPress={this.props.onBackPress}>
                    <Image
                        style={styles.backButton}
                        source={require('../../../assets/images/navigation_back_arrow.png')} />
                </TouchableHighlight>
            )
        }
    };

    renderSubmit = () => {
        if(!this.state.disableSubmitButton) {
            return(
                <TouchableHighlight onPress={this.props.onSubmitButton}>
                    <Text style={styles.submitText}>
                        {this.state.submitText}
                    </Text>
                </TouchableHighlight>
            )
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {this.renderBackPress()}
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>
                        {this.props.title}
                    </Text>
                </View>
                {this.renderSubmit()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        backgroundColor: '#48afdb',
        paddingTop: 30,
        paddingBottom: 10,
        alignItems: 'center',
    },
    backButton: {
        height: 27,
        width: 27,
        margin: 6,
        flexGrow: 0,
    },
    titleView: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: 15,
    },
    titleText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    submitButton: {

    },
    submitText: {
        margin: 6,
        marginRight: 12,
        color: '#fff',
        fontSize: 16,
    }
});