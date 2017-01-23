import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import TodoActivity from './TodoApp/TodoActivity';
import ProfileListView from './ProfileListView/ProfileListView';

export default class Navigator extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router showNavigationBar={false}>
                <Scene key="root">

                    <Scene
                        key="tabbar"
                        tabs={true}
                        tabBarStyle={styles.tabBarStyle}>

                        <Scene key="todo_tab" title="Todo App" icon={TabIcon}>
                            <Scene
                                key="todo_scene"
                                component={TodoActivity}
                                title='Scarlet'
                                initial={true} />
                        </Scene>

                        <Scene key="profile_tab" title="Profiles" icon={TabIcon}>
                            <Scene
                                key="profile_scene"
                                component={ProfileListView}
                                title='Grey'
                                initial={true} />
                        </Scene>
                    </Scene>
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