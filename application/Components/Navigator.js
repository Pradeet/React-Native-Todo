import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import TodoActivity from './TodoApp/TodoActivity';
import TodoEditActivity from './TodoApp/TodoEditActivity';
// import ProfileListView from './ProfileListView/ProfileListView';

export default class Navigator extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key='todoApp'
                        component={TodoActivity}
                        title="Todo Avtivity"
                        initial
                        hideNavBar />
                    <Scene
                        key="todoAppEdit"
                        component={TodoEditActivity}
                        title="Edit Todo"/>
                </Scene>
            </Router>
        )
    }
}

const TabIcon = ({selected, title}) => {
    return(
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff',
    }
});