import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  RESET_STORE,
} from '../actions/actions';
import { decks as MydecksList } from '../../utilities/_Data';

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      const { id, deck } = action;
      return {
        ...state,
        [id]: {
          id,
          category: deck.category,
          title: deck.title,
          questions: [],
        },
      };
    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: [...state[deckId].questions].concat(card),
        },
      };

    /* case REMOVE_DECK:
      const { delDeckId } = action;
      const { [delDeckId]: value, ...remainingDecks } = state;
      console.log(remainingDecks);
      return remainingDecks;

    case RESET_STORE:
      return MydecksList; */
    default:
      return state;
  }
};

export default decks;
