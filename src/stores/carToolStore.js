import { createStore } from 'redux';
import { carToolReducer } from '../reducers/carToolReducers';

// create store with reducers
export const carToolStore = createStore(carToolReducer);