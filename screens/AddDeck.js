import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';

import TouchButton from '../components/TouchButton';
import { addDeck } from '../store/actions/actions';
import { saveDeckTitleAS } from '../utilities/api';

import { orange, white, textGray, blue } from '../utilities/colors';

const AddDeck = ({ navigation }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const id = uuid.v4();

  const handleSubmit = () => {
    dispatch(addDeck(id, { category: category, title: title }));

    saveDeckTitleAS(id, { category: category, title: title });
    navigation.navigate('Decks List');
  };

  return (
    <View style={styles.container}>
      <View style={{ height: 60 }} />
      <View style={styles.block}>
        <Text style={styles.title}>
          Podaj nazwę i kategorię nowego zestawu.
        </Text>
      </View>
      <View style={[styles.block]}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Nazwa zestawu"
          autoFocus={true}
          returnKeyType="done"
        />
      </View>
      <View style={[styles.block]}>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={(text) => setCategory(text)}
          placeholder="Kategoria"
          autoFocus={true}
          returnKeyType="done"
        />
      </View>
      <TouchButton
        btnStyle={{ backgroundColor: orange, borderColor: blue }}
        onPress={handleSubmit}
        disabled={title === '' || category === ''}
      >
        Utwórz zestaw
      </TouchButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: blue,
  },
  block: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: textGray,
    backgroundColor: white,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    fontSize: 20,
    height: 40,
    marginBottom: 20,
  },
});

export default AddDeck;
