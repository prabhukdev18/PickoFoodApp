import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginForm from '../screens/LoginForm';
import Home from '../screens/Home';
import HomeSearch from '../screens/HomeSearch';
// import DeliveryTab from '../components/DeliveryTab';
// import PickupTab from '../components/PickupTab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="LoginForm" component={LoginForm}></Stack.Screen>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}></Stack.Screen>
        <Stack.Screen name="DeliveryTab" component={DeliveryTab}></Stack.Screen>
        <Stack.Screen name="PickupTab" component={PickupTab}></Stack.Screen>
      </Stack.Navigator> */}

      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: 'true',
        }}>
        <Tab.Screen
          name="LoginForm"
          component={LoginForm}
          options={{
            tabBarIcon: () => (
              <MIcon size={20} color="black" name="login-variant" />
            ),
          }}></Tab.Screen>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => (
              <MIcon size={20} color="black" name="shield-home-outline" />
            ),
            headerShown: false,
          }}></Tab.Screen>
        <Tab.Screen
          name="HomeSearch"
          component={HomeSearch}
          options={{
            tabBarIcon: () => (
              <MIcon size={20} color="black" name="shield-home-outline" />
            ),
            headerShown: false,
          }}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
