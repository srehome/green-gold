import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

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
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen
            name="ScreensWithTabs"
            component={ScreensWithTabs}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);
}

function ScreensWithTabs() {
  return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'setting';
            } else if (route.name === 'Rewards') {
              iconName = 'gift';
            }

            // You can return any component that you like here!
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#00f303',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor: '#da9100',
          tabBarInactiveBackgroundColor: '#eccf42',
        })}>
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} initialParams={{ScheduleDate: null}}/>
            <Tab.Screen name="Rewards" component={RewardsScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}}/>
            <Tab.Screen name="SchedulePickUp" component={SchedulePickUpScreen} options={{ headerShown: false, tabBarButton: () => null}}/>
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


export default App;