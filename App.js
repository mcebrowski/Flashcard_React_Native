import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TabsNavigator from './navigation/TabsNavigator';

const rootReducer = combineReducers({
  decks: decksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </Provider>
  );
}
