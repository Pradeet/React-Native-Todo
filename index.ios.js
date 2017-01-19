/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import TodoActivity from './application/Components/TodoActivity'

export default class Todo extends Component {
  render() {
    return (
      <TodoActivity />
    )
  }
}

AppRegistry.registerComponent('Todo', () => Todo);
