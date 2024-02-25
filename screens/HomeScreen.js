import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
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
    </SafeAreaView>
  );
}
