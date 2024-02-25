import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function RewardsScreen() {
  return (

    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['rgba(0,100,0,0.8)', '#ffe993']}
        style={styles.linearGradient}>
          <View>
            <Text style={styles.title}>{'\u26c1'}{'\u267B'} Rewards {'\u267B'}{'\u26c1'}</Text>
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
    textAlign: 'center',
    backgroundColor: '#1d2e28',
    borderRadius: 10,
    paddingVertical: 10,
    color: '#efed02',
    textShadowColor : '#ffe993',
    textShadowOpacity: .8,
    textShadowRadius: 15,
    marginTop : '10%',
    marginBottom: '20%'
  },
  profileDetails:{
    fontSize : 24,
    fontWeight : 'bold',
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