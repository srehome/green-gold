import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,StyleSheet,Button } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from "../firebase/config"


export default function SignUpScreen({navigation}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
   
   
    
    const onRegisterPress = () => {
      if (password !== confirmPassword) {
          alert("Passwords don't match.")
          return
      }
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
          const uid = response.user.uid
          const data = {
              id: uid,
              email,
              lastName,
          };
    });
  }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignContent : 'center'
      },
      input:{
        borderRadius : 4,
        height: 40,
        marginTop : 25,
        marginBottom : 10,
        marginLeft : 20,
        marginRight :20,
        backgroundColor : 'white',

      },
      btn: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'black',
        fontSize: 16,
        fontWeight: "900"
    },
    });

  return (
    <View style ={styles.container}>

      <KeyboardAwareScrollView style={{flex :1, width:'100%'}}
      keyboardShouldPersistTaps="always">

      <TextInput style={styles.input} placeholder='First Name' placeholderTextColor='black'
                  autoCapitalize='None' value={firstName} onChangeText={(value) => setFirstName(value)}/>
      <TextInput style={styles.input} placeholder='Last Name' placeholderTextColor='black'
                  autoCapitalize='None' value={lastName} onChangeText={(value) => setLastName(value)}/>
      <TextInput style={styles.input} placeholder='Email ' placeholderTextColor='black'
                  autoCapitalize='None' value={email} onChangeText={(value) => setEmail (value)}/>
      <TextInput style={styles.input} placeholder='Password ' placeholderTextColor='black'
                  autoCapitalize='None' secureTextEntry value={password} onChangeText={(value) => setPassword (value)}/>
       <TextInput style={styles.input} placeholder='Re-enter Password ' placeholderTextColor='black' 
                  autoCapitalize='None' secureTextEntry value={confirmPassword} onChangeText={(value) => setConfirmPassword (value)}/>
     
     <TouchableOpacity
                    style={styles.btn}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Register</Text>
                </TouchableOpacity>
      </KeyboardAwareScrollView>
     </View>

    
  );
}