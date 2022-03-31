import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DecksList from '../screens/DecksList';
import DeckDetail from '../screens/DeckDetail';
import AddDeck from '../screens/AddDeck';
import AddCard from '../screens/AddCard';
import StartQuiz from '../screens/Quiz';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Decks List"
        component={DecksList}
      />
      <Stack.Screen name="Deck Detail" component={DeckDetail} />
      <Stack.Screen name="Add Deck" component={AddDeck} />
      <Stack.Screen name="Add Card" component={AddCard} />
      <Stack.Screen name="Start Quiz" component={StartQuiz} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
