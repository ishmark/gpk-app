import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component {
    render() {
        return(
          <View style={styles.container}>
              <Logo/>
              <Form type="Login"/>
              <View style={styles.signupTextCont}>
                 <Text style={styles.signupText}>Don't have an account yet? </Text>
                 <Text style={styles.signupButton}>Signup</Text>
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#F8BBD0',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupTextCont: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection: 'row'
    },
    signupText: {
      color: '#000',
      fontSize: 16
    },
    signupButton: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500'
    }
  });