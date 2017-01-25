import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import TodoHomePage from '../pages/homePage/components/TodoHomePage';
import TodoDetailsPage from '../pages/detailsPage/components/TodoHomePage';

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
                        component={TodoHomePage}
                        title="Todo Activity"
                        initial
                        hideNavBar />
                    <Scene
                        key="todoAppEdit"
                        component={TodoDetailsPage}
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