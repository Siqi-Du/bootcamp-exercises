import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  createAddCarAction,
  createRemoveCarAction,
  createReplaceCarAction,
  createEditCarAction,
  createCancelEditCarAction,
} from '../actions/carToolActions';


export const useCarToolStore = (initialCars) => {

  // for sort cars
  const [ 
    , , , , 
    sortCol, setSortCol, sortDir, setSortDir,
  ] = useSortedList([...initialCars]);

  // 注意sort的逻辑 每一列都是单独的sort，当按这一列sort时无需记住其他列之前的sortDir
  const sortCars = col => {
    // 如果换列了，默认asc
    if(col !== sortCol){
      setSortCol(col);
      setSortDir(SORT_ASC);
    } else {
      setSortDir(sortDir === SORT_ASC ? SORT_DESC : SORT_ASC);
    }
  };

  const reducer = useSelector(state => state);
  const dispatch = useDispatch();
  const boundActions = bindActionCreators({
    addCar: createAddCarAction,
    deleteCar: createRemoveCarAction,
    saveCar: createReplaceCarAction,
    editCar: createEditCarAction,
    cancelCar: createCancelEditCarAction,
  }, dispatch);

  return {
    sortCol, sortDir, sortCars,
    reducer, ...boundActions
  };
};