/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import TodoActivity from './application/Components/TodoActivity';
import ListViewDemo from './application/Components/ListViewDemo/ListViewDemo';
import * as firebase from 'firebase';

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
      <TodoActivity />
        // <ListViewDemo />
    )
  }
}

AppRegistry.registerComponent('Todo', () => Todo);
