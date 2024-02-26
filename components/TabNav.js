import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExercisesScreen from '../screens/ExercisesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import LogsScreen from '../screens/LogsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Exercises"
    screenOptions={{
      tabBarActiveTintColor: '#FF007F',
      tabBarActiveBackgroundColor: 'black',
      tabBarStyle: {backgroundColor: '#18181b'},
    }}
  >
    <Tab.Screen
      name="Exercises"
      component={ExercisesScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Exercises",
        tabBarIcon: ({ color }) => (
          <Ionicons name="barbell" size={20} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={FavoritesScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Favorites",
        tabBarIcon: ({ color }) => (
          <Ionicons name="heart" size={20} color={color}/>
        ),
      }}
    />
    <Tab.Screen
      name="Logs"
      component={LogsScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Logs",
        tabBarIcon: ({ color }) => (
          <Ionicons name="clipboard" size={20} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;