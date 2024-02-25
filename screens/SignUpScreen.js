import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase from "../firebase/config"
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';


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
                }
                navigation.navigate('Login', {
                  UserData: data,
                })
              });
  }



  return (
    <SafeAreaView style ={styles.container}>
      <LinearGradient
        colors={['rgba(0,100,0,0.8)', '#ffe993']}
        style={styles.linearGradient}>
      <KeyboardAwareScrollView style={{flex :1, width:'100%'}}
      keyboardShouldPersistTaps="always">

      <Text style={styles.title}>Sign Up</Text>

      <TextInput style={styles.input} placeholder='First Name' placeholderTextColor='black'
                   value={firstName} onChangeText={(value) => setFirstName(value)}/>
      <TextInput style={styles.input} placeholder='Last Name' placeholderTextColor='black'
                 value={lastName} onChangeText={(value) => setLastName(value)}/>
      <TextInput style={styles.input} placeholder='Email ' placeholderTextColor='black'
                   value={email} onChangeText={(value) => setEmail (value)}/>
      <TextInput style={styles.input} placeholder='Password ' placeholderTextColor='black'
                  secureTextEntry value={password} onChangeText={(value) => setPassword (value)}/>
       <TextInput style={styles.input} placeholder='Re-enter Password ' placeholderTextColor='black' 
                   secureTextEntry value={confirmPassword} onChangeText={(value) => setConfirmPassword (value)}/>
     
     <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
      </KeyboardAwareScrollView>
      </LinearGradient>
     </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
      },
      linearGradient: {
        flex: 1,
        paddingHorizontal: '3%',
        borderRadius: 5
      },
      title:{
        fontSize : 40,
        fontWeight : 'bold',
        fontFamily: 'serif',
        textAlign: 'center',
        color : '#fff',
        marginTop : '15%',
        marginBottom: '15%'
      },
      input:{
        fontFamily: 'serif',
        borderRadius : 4,
        height: 40,
        paddingHorizontal: 4,
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '6%',
        marginRight: '6%',
        backgroundColor: 'white',
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 2,
        backgroundColor: 'white',
        marginTop : '5%',
        marginHorizontal: '10%',
        borderColor: '#0f5132',
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'serif',
        lineHeight: 26,
        fontWeight: '600',
        color: 'black',
      },
});