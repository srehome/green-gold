import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function SettingsScreen() {

  return (

    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(0,100,0,0.8)', '#ffe993']}
        style={styles.linearGradient}>
     
      <Text style={styles.title}> Profile Settings </Text>
      <Text style={styles.profileDetails}>User Name: </Text>
      <Text style={styles.profileDetails}>User Email: </Text>

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
    fontFamily: 'serif',
    textAlign: 'center',
    color : '#fff',
    shadowColor : 'blue',
    elevation : 7,
    marginTop : '10%',
    marginBottom: '20%'
  },
  profileDetails:{
    fontSize : 24,
    fontWeight : 'bold',
    fontFamily: 'serif',
    textAlign: 'center',
    textAlignVertical: 'center',
    color : '#0f5132',
    borderColor: '#0f5132',
    borderWidth: 5,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginBottom: '5%',
  },
});