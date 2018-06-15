import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Form extends Component {

    render() {
        return(

         <View style={styles.container}>   
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='#000' 
                placeholder='Username'
                placeholderTextColor='#000'/>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='#000' 
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#000'/>

            <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputBox: {
       width: 300,
       paddingHorizontal: 35,
       fontSize: 16,
       color: '#000',
       marginVertical: 18
    },
    button: {
       width: 300,
       backgroundColor: '#000',
       borderRadius: 25,
       marginVertical: 10,
       paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
  });