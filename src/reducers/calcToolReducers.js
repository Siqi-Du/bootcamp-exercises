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

// initialize the result on the initial load
export const resultReducer = (/* state */ result = 0, action) => {
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
};

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
  /* if( [ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type) ){
    return '';
  }; */
  return errorMessage;
};


/* export const calcToolReducer = (state = {}, action) => {
  return {
    ...state,
    result: resultReducer(state.result, action),
    history: historyReducer(state.history, action),
  }
}; */

export const calcToolReducer = combineReducers({
  result: resultReducer,
  history: historyReducer,
  errorMessage: errorMessageReducer,
});