import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component {
    render() {
        return(

         <View style={styles.container}>   
           <Image style={{    
                // flex: 1,
                width: 300,
                height: 290,
                marginBottom: 450,
                }}
            source={require('../images/Final.png')}
            resizeMode = 'contain'
            />
            <Text></Text>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });