/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
 
'use strict';

import React from 'react-native';
import Welcome from './components/Welcome';

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Welcome />
      </View>
    );
  }
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('HealthApp', () => App);
