import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from "../firebase/config"

export default function LoginScreen({navigation}) {
  const [emailAddress, setEmailAddress ] = useState("");
  const [password,setPassword] = useState("")

  const register = () => {
    navigation.navigate('SignUpScreen')
  }
  return (

    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,100,0,0.8)', '#ffe993']}
        style={styles.linearGradient}>
     
      <Text style ={styles.title} >{'\u2740'} Green Gold </Text>
      
      <Text style ={styles.inputLabel} > Email Address </Text>

      <TextInput style ={styles.inputControl}  placeholder ="johndoe@example.com" 
      placeholderTextColor= 'grey'
      onChangeText={(emailAddress) =>setEmailAddress(emailAddress)} />

      <Text style ={styles.inputLabel}> Password </Text>
      <TextInput style ={styles.inputControl}  
      secureTextEntry={true}
      placeholder ="password" 
      placeholderTextColor= 'grey'
      onChangeText={(password) =>setPassword(password)} />

    <TouchableOpacity
    onPress={() => {
      firebase.auth().signInWithEmailAndPassword(emailAddress,password)
      .then((response) => {
        const user = response.user;
        navigation.navigate('ScreensWithTabs', {screen: 'Home'})
      })
      .catch(error => {
        alert(error)
    });
      //navigation.navigate('ScreensWithTabs', {screen: 'Home'})
    }}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>Log In</Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={() => {
      navigation.navigate('ScreensWithTabs', {screen: 'SignUp'})
    }}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>Sign Up</Text>
    </View>
    </TouchableOpacity>

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
    fontSize : 45,
    fontWeight : 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
    color: '#efed02',
    textShadowColor : '#ffe993',
    textShadowRadius: 15,
    marginTop : '25%',
    marginBottom: '20%'
  },
  inputLabel:{
    fontSize : 21,
    fontFamily: 'serif',
    fontWeight : '600',
    alignItems: 'flex-end',
  },
  inputControl: {
    height: 50,
    width :"100%",
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '900',
    fontFamily: 'serif',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
    marginBottom: '20%'
  },
   btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop : '5%',
    borderColor: '#0f5132',
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'serif',
    lineHeight: 26,
    fontWeight: '600',
    color: 'black',
  },
});
