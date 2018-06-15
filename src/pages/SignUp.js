import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class SignUp extends Component {
    render() {
        return(
          <View style={styles.container}>
              <Logo/>
              <Form type="Register"/>
              <View style={styles.signupTextCont}>
                 <Text style={styles.signupText}>Already have an Account? </Text>
                 <Text style={styles.signupButton}>SignIn</Text>
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