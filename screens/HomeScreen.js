import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({route, navigation}) {

  const date = route.params.ScheduleDate ? route.params.ScheduleDate.toString() : null;

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(0,100,0,0.8)', '#ffe993']}
        style={styles.linearGradient}>

      <Text style={styles.title}>Home Screen</Text>

      <View style={{justifyContent: 'flex-end', flex: 1, paddingBottom: '30%'}}>
        <Text style={styles.dateTimeText}>{date}</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SchedulePickUp')
          }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Schedule Pick Up</Text>
            </View>
        </TouchableOpacity>
      </View>
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
    marginTop : '10%',
    marginBottom: '20%'
  },
  button: {
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
  buttonText: {
    fontSize: 18,
    fontFamily: 'serif',
    lineHeight: 26,
    fontWeight: '600',
    color: 'black',
  },
  dateTimeText: {
    fontSize : 55,
    fontWeight : 'bold',
    fontFamily: 'serif',
    fontVariant: 'oldstyle-nums',
    textAlign: 'center',
    color : '#fff',
    marginBottom: '35%',
  },
});