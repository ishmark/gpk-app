import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import BackLogin from './components/BackLogin';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
           backgroundColor="black"
           barStyle="light-content"/>
           <BackLogin />
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
