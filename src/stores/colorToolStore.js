import { applyMiddleware, createStore } from 'redux';
import { colorToolReducer } from '../reducers/colorToolReducers';
import thunk from 'redux-thunk';

// create store with reducers
export const colorToolStore = createStore(
  colorToolReducer,
  // add thunk middleware between action and store
  applyMiddleware(thunk),
);