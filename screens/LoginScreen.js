import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({navigation}) {
  const [emailAddress, setEmailAddress ] = useState("");
  const [password,setPassword] = useState("")

  const register = () => {
    navigation.navigate('SignUpScreen')
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
     
      <Text style ={styles.title} > Green Gold </Text>

      <Text style ={styles.inputLabel} > Email Address </Text>

      <TextInput style ={styles.inputControl}  placeholder ="johndoe@example.com" 
      placeholderTextColor= 'grey'
      onChangeText={(value) =>setEmailAddress(value)} />

      <Text style ={styles.inputLabel}> Password </Text>
      <TextInput style ={styles.inputControl}  
      secureTextEntry={true}
      placeholder ="password" 
      placeholderTextColor= 'grey'
      onChangeText={(password) =>setPassword(password)} />

    <TouchableOpacity
    onPress={() => {
      // handle onPress
    }}>
    <View style={styles.btn}>
      <Text style={styles.btnText}>Login</Text>
    </View>
    <View style={styles.btn}>
      <Text style={styles.btnText} onPress={register}>Register</Text>
    </View>
    </TouchableOpacity>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
 title:{
    width : 200 ,
    fontSize : 36,
    fontWeight : '700',
    color : '#fff',
    shadowColor : 'blue',
    elevation : 7,
    marginLeft :10,
    marginTop : 100
  },
  inputLabel:{
    fontSize : 21,
    marginTop : 60,
    marginRight : 260,
    fontWeight : '600',
    alignItems: 'flex-end',
    marginBottom : 8
  },
  inputControl: {
    height: 50,
    width :"100%",
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '900',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
   btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'white',
    marginTop : 10,
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: 'black',
  },
});
