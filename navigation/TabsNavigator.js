import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackNavigator from './StackNavigator';

import AddDeck from '../screens/AddDeck';
const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Add Deck') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{ headerShown: false, headerTitle: '' }}
      />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
