import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createAddCarAction,
  createReplaceCarAction,
  createSortCarAction,
  createEditCarAction,
  createCancelEditCarAction,
  createRemoveCarAction,
} from '../actions/carToolActions';

import { defaultSortItems } from '../selectors/colorToolSelectors'
export const useCarToolReduxStore = () => {
  
  const sortedCars = useSelector(state => {
    return defaultSortItems(state.cars, state.carsSort.col, state.carsSort.dir);
  });

  const { col: sortCol, dir: sortDir } = useSelector(state => { return state.carsSort });

  const dispatch = useDispatch();

  const actions = bindActionCreators({
    appendCar: createAddCarAction,
    removeCar: createRemoveCarAction,
    replaceCar: createReplaceCarAction,
    sortCats: createSortCarAction,
    editCar: createEditCarAction,
    cancelEditCar: createCancelEditCarAction,
  }, dispatch);

  return {
    sortedCars,
    sortCol,
    sortDir,
    ...actions,
  }
};