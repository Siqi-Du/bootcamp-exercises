import { createStore } from 'redux';
import { calcToolReducer } from '../reducers/calcToolReducers';

// create store with reducers
export const calcToolStore = createStore(calcToolReducer);


// what is store
// export const createStore = reducerFn => {

//   let currentState = undefined;
//   const subscribers = [];


//   // store object
//   const store = {
//     getState: () => currentState,
//     dispatch: action => {
//       currentState = reducerFn(currentState, action);
//       subscribers.forEach(fn => fn());
//     },
//     subscribe: fn => subscribers.push(fn),
//   };

//   store.dispatch({ type: 'INIT' });

//   return store;
// };

// calcToolStore.subscribe(() => {
//   calcToolStore.getState();
// });