import { combineReducers } from 'redux';
import { 
  ADD_ACTION, 
  SUBTRACT_ACTION, 
  MULTIPLY_ACTION, 
  DIVIDE_ACTION,
  CLEAR_ACTION,
  DELETE_HISTORY_ENTRY_ACTION,
 } from '../actions/calcToolActions';

// reducer: s' = reducer(s,a)

// -----> convert our reducer to multi reducers

// Duplicate state: 
// Result and history ==> we can retrieve result from history

// initialize the result on the initial load
/* export const resultReducer = (result = 0, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return result + action.payload.value ;
    case SUBTRACT_ACTION:
      return result - action.payload.value;
    case MULTIPLY_ACTION:
      return result * action.payload.value;
    case DIVIDE_ACTION:
      if(action.payload.value === 0){
        return result;
      }
      return result / action.payload.value;
    case CLEAR_ACTION:
      return 0;
    default:
      return result;
  }
}; */

export const historyReducer = (/* state */ history = [], action) => {

  if(action.type === DIVIDE_ACTION && action.payload.value === 0){
    return history;
  };
    
  // other reducers may have some other ops on the state && you can't mutate the original state 
  // so better make a full copy
  if( [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type) ){
    return [
      ...history, 
      {
        id: Math.max(...history.map(entry => entry.id), 0) + 1,
        opName: action.type,
        opValue: action.payload.value,
      }
    ];
  };
  
  if(action.type === CLEAR_ACTION) {
    return [];
  };
      
  if(action.type === DELETE_HISTORY_ENTRY_ACTION){
    return history.filter(i => i.id !== action.payload.entryId);
  };
      
  return history;
};

export const errorMessageReducer = (/* state */ errorMessage = '', action) => {
  if(action.type === DIVIDE_ACTION && action.payload.value === 0){
    return "should not devide by 0";
  };
  if( [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type) ){
    return '';
  };
  return errorMessage;
};

// count can also derived from history!!!!! ==> duplacate states!!
/* export const countReducer = (count = {ADD:0, SUBTRACT:0, MULTIPLY:0, DIVIDE:0}, action) => {
  switch (action.type){
    case ADD_ACTION:
      console.log(count.ADD_ACTION );
      return {
        ...count,
        ADD: count.ADD + 1,
      }
    case SUBTRACT_ACTION:
      return {
        ...count,
        SUBTRACT: count.SUBTRACT + 1,
      }
    case MULTIPLY_ACTION:
      return {
        ...count,
        MULTIPLY: count.MULTIPLY + 1,
      }
    case DIVIDE_ACTION:
      if(action.payload.value == 0){
        return count;
      }
      return {
        ...count,
        DIVIDE: count.DIVIDE + 1,
      }
    case CLEAR_ACTION:
      return {ADD:0, SUBTRACT:0, MULTIPLY:0, DIVIDE:0};
    case DELETE_HISTORY_ENTRY_ACTION:
      // how to know which op to minus 1?
    default:
      return count;
  }
}; */


/* export const calcToolReducer = (state = {}, action) => {
  return {
    ...state,
    result: resultReducer(state.result, action),
    history: historyReducer(state.history, action),
  }
}; */

export const calcToolReducer = combineReducers({
  history: historyReducer,
  errorMessage: errorMessageReducer,
});