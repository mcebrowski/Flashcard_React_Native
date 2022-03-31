import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="DeckList"
        component={DeckList}
      />
      <Stack.Screen name="DeckDetail" component={DeckDetail} />
      <Stack.Screen name="Add Deck" component={AddDeck} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="StartQuiz" component={StartQuiz} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
