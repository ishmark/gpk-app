import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';

export default class BackLogin extends Component {
    render() {
        return(
  
           <Image
            source={require('../images/login_bg.jpg')}
            style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       width: null,
       height: null,
       justifyContent: 'center',
       alignItems: 'center'
   }
});