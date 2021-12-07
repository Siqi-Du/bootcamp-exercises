import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createAddColorAction,
  createDeleteColorAction,
  createSortColorAction,
  refershColors,
} from '../actions/colorToolActions';

import { sortedColorsSelector } from '../selectors/colorToolSelectors'

// boundActions/dispatch(): connects events into action dispatched from the store
// useSelector(): connect state data to react UI
// hooks needs to access a fiberNode, a fibernode only available in functional component
// this code get called on every render!!
export const useColorToolReduxStore = () => {

  const sortedColors = useSelector(sortedColorsSelector);
  const { col: sortCol, dir: sortDir } = useSelector(state => state.colorsSort);

  const dispatch = useDispatch(); // dispatch never change

  const actions = useMemo(() => bindActionCreators({
    refershColors,
    addColor: createAddColorAction,
    deleteColor: createDeleteColorAction,
    sortColors: createSortColorAction,
  }, dispatch), [dispatch]); // since we use memo, actions won't change everytime

  useEffect(() => {
    // issue here:
    // when actions changed, we re-create this refreshColors(),
    // but refreshColors() will cause a re-render, which call this function again
    // ==> so we only want to refresh on the initial load
    actions.refershColors();
  }, [actions]); // -> if actions not change, we don't re-runs it

  return {
    sortedColors,
    sortCol,
    sortDir,
    ...actions,
  };

};