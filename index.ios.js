/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import TodoActivity from './application/Components/TodoActivity';
import ListViewDemo from './application/Components/ListViewDemo/ListViewDemo';

export default class Todo extends Component {
  render() {
    return (
      <TodoActivity />
        // <ListViewDemo />
    )
  }
}

AppRegistry.registerComponent('Todo', () => Todo);
