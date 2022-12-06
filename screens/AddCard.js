import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { addCardToDeck } from '../store/actions/actions';
import { useDispatch } from 'react-redux';
import { addCardToDeckAS } from '../utilities/api';
import Styles from '../utilities/styles';

const AddCard = ({ route, navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: 'Dodaj fiszkę' });
  }, []);

  const dispatch = useDispatch();
  const { deck } = route.params;
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    dispatch(
      addCardToDeck(deck.deck.id, { answer: answer, question: question })
    );
    addCardToDeckAS(deck.deck.id, { answer: answer, question: question });
    navigation.navigate('Decks List');
  };

  return (
    <View style={Styles.main}>
      <Text style={Styles.deckTexts}>
        Dodaj fiszkę do zestawu: {deck.deck.title}
      </Text>
      <View style={Styles.VerticalAlignCenter}>
        <View style={{ marginBottom: 30 }}>
          <TextInput
            style={Styles.textInput}
            value={question}
            placeholder="Pytanie"
            onChangeText={(text) => setQuestion(text)}
          />
        </View>

        <View style={{ marginBottom: 30 }}>
          <TextInput
            style={Styles.textInput}
            value={answer}
            placeholder="Odpowiedź"
            onChangeText={(text) => setAnswer(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={{ marginBottom: 30 }} onPress={handleSubmit}>
        <Text style={Styles.button}>Dodaj</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCard;
