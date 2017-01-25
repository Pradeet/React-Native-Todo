import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';

import TodoActivity from './application/pages/homePage/components/TodoHomePage';
import ProfileListView from './application/pages/profileListView/ProfileListView';
import Navigator from './application/pages/Navigator';

export default class Todo extends Component {

  constructor(props) {
    super(props);

      var config = {
          apiKey: "AIzaSyAUrYjqKoc7yU_dUL071ACFJPC-QY_e-Lw",
          authDomain: "todoapp-bd5f4.firebaseapp.com",
          databaseURL: "https://todoapp-bd5f4.firebaseio.com",
          storageBucket: "todoapp-bd5f4.appspot.com",
          messagingSenderId: "478734018857"
      };
      firebase.initializeApp(config);
  }

  render() {
    return (
        // <TodoActivity />
        <ProfileListView />
        // <Navigator />
    )
  }
}

AppRegistry.registerComponent('Todo', () => Todo);
