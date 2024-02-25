import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(0,100,0,0.8)', '#ffe993']}
        style={styles.linearGradient}>

      <Text style={styles.title}>Home Screen</Text>

      <Button title="Rewards"
            onPress={() => {
                    navigation.navigate('Rewards')
                  }}></Button>
      <Button title="Settings"
            onPress={() => {
                    navigation.navigate('Settings')
                  }}></Button>
      <Button title="SignUp"
            onPress={() => {
                    navigation.navigate('SignUp')
                  }}></Button>
      <Button title="Login"
            onPress={() => {
                    navigation.navigate('Login')
                  }}></Button>

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
    fontSize : 36,
    fontWeight : '700',
    textAlign: 'center',
    color : '#fff',
    shadowColor : 'blue',
    elevation : 7,
    marginTop : '10%',
    marginBottom: '20%'
  },
});