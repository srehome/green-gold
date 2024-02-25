import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import screens here
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import RewardsScreen from './screens/RewardsScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import SchedulePickUpScreen from './screens/SchedulePickUpScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
        />
        <Stack.Screen
            name="Rewards"
            component={RewardsScreen}
        />
        <Stack.Screen
            name="Settings"
            component={SettingsScreen}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
        />
        <Stack.Screen
            name="SchedulePickUp"
            component={SchedulePickUpScreen}
        />
        
    </Stack.Navigator>
);
}

function MyTabs() {
  return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Rewards"
                component={RewardsScreen}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />
        </Tab.Navigator>
);
}

const App = () => {
  const [text, onChangeText] = React.useState('Search');

  return (
    <NavigationContainer>
     <MyStack />
   </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;