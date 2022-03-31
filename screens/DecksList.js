import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { handleInitialData } from '../store/actions/actions';
import { blue, orange } from '../utilities/colors';
import Deck from '../components/Deck';

const DecksList = (props) => {
  const dispatch = useDispatch();
  const decks = useSelector((state) => state);

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FlashCards</Text>
      {decks === undefined
        ? 'No decks. Please add new one'
        : Object.values(decks).map((deck) => {
            return (
              <TouchableOpacity
                key={deck.title}
                onPress={() =>
                  props.navigation.navigate('Deck Detail', { deck: deck })
                }
              >
                <Deck id={deck.title} />
              </TouchableOpacity>
            );
          })}
      <View></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: blue,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: orange,
  },
});

export default DecksList;
