import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return(
           <Button 
              title="Profile"
              onPress={() => navigate('profile', { name: Login, SignUp })}
           />
        );
    }
}