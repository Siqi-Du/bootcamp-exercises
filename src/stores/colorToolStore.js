import { createStore } from 'redux';
import { colorToolReducer } from '../reducers/colorToolReducers';

// create store with reducers
export const colorToolStore = createStore(colorToolReducer);