/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, WebView } from 'react-native';

export default class lada_service_application extends Component {
  render() {
    return (
      <WebView source={{uri: 'http://m.asialada.ru/administrator'}}/>
    );
  }
}


AppRegistry.registerComponent('lada_service_application', () => lada_service_application);
