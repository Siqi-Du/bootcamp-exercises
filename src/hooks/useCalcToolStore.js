import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createAddAction, 
  createSubtractAction, 
  createMultiplyAction, 
  createDivideAction,
  createClearAction,
  createDeleteHistoryEntryAction,
  ADD_ACTION, 
  SUBTRACT_ACTION, 
  MULTIPLY_ACTION, 
  DIVIDE_ACTION,
  // CLEAR_ACTION,
  // DELETE_HISTORY_ENTRY_ACTION,
} from '../actions/calcToolActions';


export const useCalcToolStore = () => {

  // subscribe to the store, and allow us to specify a fn, ???10:35am
  // hook is used inside a component or custom hook
  // why we have 2 useSelector: only re-render what changed
  // const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);
  const errorMessage = useSelector(state => state.errorMessage);

  // result is no longer in state, its duplicates history
  // const result = useSelector(state => {
  //     let result = 0;
  //     state.history.forEach(entry => {
  //       switch (entry.opName) {
  //         case ADD_ACTION:
  //           result += entry.opValue;
  //           break;
  //         case SUBTRACT_ACTION:
  //           result -= entry.opValue;
  //           break;
  //         case MULTIPLY_ACTION:
  //           result *= entry.opValue;
  //           break;
  //         case DIVIDE_ACTION:
  //           result *= entry.opValue;
  //           break;
  //         default:
  //           break;
  //       }
  //     });
  //     return result;
  // });

  const result = useSelector(state => {
    // 不用forEach()
    // reduce() gonna iterate over history, 
    // and call the fn() below for each iteration, on the first iteration, theResult is initialize to 0
    return state.history.reduce( (theResult, entry) => {
      switch (entry.opName) {
        case ADD_ACTION:
          return theResult + entry.opValue;
        case SUBTRACT_ACTION:
          return theResult - entry.opValue;
        case MULTIPLY_ACTION:
          return theResult * entry.opValue;
        case DIVIDE_ACTION:
          return theResult / entry.opValue;
        default:
          return theResult;
      }
    }, 0 /* initial value of theResult */);
  });

  // count can also derived from history!!!!! ==> duplacate states!!
  const count = useSelector(state => {
    return state.history.reduce( (theCount, entry) => {
      if(theCount[entry.name]){
        theCount[entry.opName] ++;
      } else {
        theCount[entry.opName] = 1;
      }
      return theCount;
    }, {});
  });
  

  // setup actions
  const dispatch = useDispatch(); // access dispatch method

  /* const add = value => {
    const addAction = createAddAction(value);
    dispatch(addAction);
  } */

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction,
  }, dispatch);

  return {
    history, errorMessage, result, count,
    ...boundActions,
  };
};