import React from "react";
import { View, Text, Button } from "react-native";
export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
    </View>
  );
}