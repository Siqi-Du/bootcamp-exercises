import { 
  ADD_ACTION, 
  SUBTRACT_ACTION, 
  MULTIPLY_ACTION, 
  DIVIDE_ACTION,
  CLEAR_ACTION,
 } from '../actions/calcToolActions';

// reducer: s' = reducer(s,a)

// initialize the state on the initial load
export const calcToolReducer = (state = { result: 0, history: [] }, action) => {
  
  switch (action.type) {
    case ADD_ACTION:
      // other reducers may have some other ops on the state && you can't mutate the original state 
      // so better make a full copy
      return {
        ...state,
        result: state.result + action.payload.value,
        history: [...state.history , {
          id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
          opName: ADD_ACTION,
          opValue: action.payload.value,
        }],
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.payload.value,
        history: [...state.history , {
          id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
          opName: SUBTRACT_ACTION,
          opValue: action.payload.value,
        }],
      };
    case MULTIPLY_ACTION:
      return {
        ...state,
        result: state.result * action.payload.value,
        history: [...state.history , {
          id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
          opName: MULTIPLY_ACTION,
          opValue: action.payload.value,
        }],
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        result: state.result / action.payload.value,
        history: [...state.history , {
          id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
          opName: DIVIDE_ACTION,
          opValue: action.payload.value,
        }],
      };
    case CLEAR_ACTION:
      return {
        ...state,
        result: 0,
        history:[],
      };
    default:
      return state;
  }

};