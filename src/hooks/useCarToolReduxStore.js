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

import { sortedCarsSelector } from "../selectors/carToolSelectors";

export const useCarToolReduxStore = () => {
  
  const sortedCars = useSelector(sortedCarsSelector);

  const editCarId = useSelector(state => state.editCarId);

  const { col: sortCol, dir: sortDir } = useSelector(state => state.carsSort);

  const dispatch = useDispatch();

  const actions = bindActionCreators({
    addCar: createAddCarAction,
    deleteCar: createRemoveCarAction,
    saveCar: createReplaceCarAction,
    sortCars: createSortCarAction,
    editCar: createEditCarAction,
    cancelCar: createCancelEditCarAction,
  }, dispatch);

  return {
    sortedCars,
    editCarId,
    sortCol,
    sortDir,
    ...actions,
  }
};