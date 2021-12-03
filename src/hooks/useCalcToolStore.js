import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createAddAction, 
  createSubtractAction, 
  createMultiplyAction, 
  createDivideAction,
  createClearAction,
  createDeleteAction
} from '../actions/calcToolActions';

export const useCalcToolStore = () => {

  // subscribe to the store, and allow us to specify a fn, ???10:35am
  // hook is used inside a component or custom hook
  // why we have 2 useSelector: only re-render what changed
  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);
  const errorMessage = useSelector(state => state.errorMessage);
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
    deleteById: createDeleteAction,
  }, dispatch);

  return {
    result, history, errorMessage,
    ...boundActions,
  };
};