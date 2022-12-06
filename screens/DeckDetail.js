import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';

import Styles from '../utilities/styles';

const DeckDetail = ({ route, navigation }) => {
  const deck = route.params;

  let cards = 0;

  if (route.params !== undefined) {
    cards = deck.deck.questions.length;
  }

  useEffect(() => {
    navigation.setOptions({ title: deck.deck.category });
  }, []);

  return (
    <View style={Styles.main}>
      <Text style={Styles.header}>{deck.deck.title}</Text>
      <Text style={Styles.cards}>
        {cards === 1
          ? cards + ' Fiszka'
          : cards === 0
          ? 'Brak fiszek'
          : cards + ' Fiszek'}
      </Text>

      <View style={Styles.deckOptions}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Add Card', { deck: route.params })
          }
        >
          <Text style={Styles.button}>Dodaj fiszkę</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Start Quiz', { deck: route.params.deck })
          }
        >
          <Text style={Styles.button}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckDetail;
