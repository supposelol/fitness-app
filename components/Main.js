import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from '../screens/IndexScreen';
import TabNavigator from './TabNav';
import BackScreen from '../screens/exercises/BackScreen';
import CardioScreen from '../screens/exercises/CardioScreen';
import LowerLegsScreen from '../screens/exercises/LowerLegsScreen';
import LowerArmsScreen from '../screens/exercises/LowerArmsScreen';
import ChestScreen from '../screens/exercises/ChestScreen';
import ShouldersScreen from '../screens/exercises/ShouldersScreen';
import UpperArmsScreen from '../screens/exercises/UpperArmsScreen';
import UpperLegsScreen from '../screens/exercises/UpperLegsScreen';
import WaistScreen from '../screens/exercises/WaistScreen';
import NeckScreen from '../screens/exercises/NeckScreen';

const Stack = createStackNavigator();

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="TabNav"
        component={TabNavigator}
        options={{
          headerLeft: null,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BackScreen"
        component={BackScreen}
        options={{
          title: 'Back',
          headerStyle: {
            backgroundColor: '#18181b', //header color
          },
          headerTintColor: '#B26ECE', //text color 
        }}
      />
      <Stack.Screen
        name="CardioScreen"
        component={CardioScreen}
        options={{
          title: 'Cardio',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="LowerArmsScreen"
        component={LowerArmsScreen}
        options={{
          title: 'Lower Arms',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="LowerLegsScreen"
        component={LowerLegsScreen}
        options={{
          title: 'Lower Legs',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="ChestScreen"
        component={ChestScreen}
        options={{
          title: 'Chest',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="NeckScreen"
        component={NeckScreen}
        options={{
          title: 'Neck',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="ShouldersScreen"
        component={ShouldersScreen}
        options={{
          title: 'Shoulders',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="UpperArmsScreen"
        component={UpperArmsScreen}
        options={{
          title: 'Upper Arms',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="UpperLegsScreen"
        component={UpperLegsScreen}
        options={{
          title: 'Upper Legs',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
      <Stack.Screen
        name="WaistScreen"
        component={WaistScreen}
        options={{
          title: 'Waist',
          headerStyle: {
            backgroundColor: '#18181b',
          },
          headerTintColor: '#B26ECE',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Main;