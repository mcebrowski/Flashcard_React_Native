import { getDecks } from '../../utilities/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const RESET_STORE = 'RESET_STORE';
export const REMOVE_DECK = 'REMOVE_DECK';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(id, deck) {
  return {
    type: ADD_DECK,
    id,
    deck,
  };
}

export function addCardToDeck(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  };
}

export function handleInitialData() {
  return async (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  };
}

/* export function resetStore() {
  return {
    type: RESET_STORE,
  };
}

export function removeDeck(id) {
  return {
    type: REMOVE_DECK,
    id,
  };
} */
