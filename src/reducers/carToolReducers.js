import { combineReducers } from 'redux';
import {
  ADD_CAR_ACTION,
  REMOVE_CAR_ACTION,
  REPLACE_CAR_ACTION,
  EDIT_CAR_ACTION,
  CANCEL_EDIT_CAR_ACTION,
  SORT_CARS_ACTION,
} from '../actions/carToolActions';


// boolean isEditable is not good
const carList = [
  {id: 1, make: 'Tesla', model: 'X', year: '2020', color: 'black', price: '--'},
  {id: 2, make: 'Tesla', model: 'Y', year: '2021', color: 'white', price: '--'},
];

export const carsReducer = (/* state */ cars = carList, action) => {
  if(action.type === ADD_CAR_ACTION){
    return [
        ...cars,
        {
          ...action.payload.car,
          id: Math.max(...cars.map(i => i.id), 0) + 1,
        },
      ];
  }

  if(action.type === REMOVE_CAR_ACTION){
    return cars.filter(i => i.id !== action.payload.carId)
  }

  if(action.type === REPLACE_CAR_ACTION){
    const copyCars = [ ...cars ];
    const index = cars.findIndex(c => c.id === action.payload.car.id)
    copyCars[index] = action.payload.car;
    return copyCars;
  }

  return cars;
};

export const editCarIdReducer = (editCarId = -1, action) =>{
  if (action.type === EDIT_CAR_ACTION){
    return action.payload.editCarId;
  }

  if(action.type === CANCEL_EDIT_CAR_ACTION){
    return -1;
  }

  return editCarId;
};

export const carsSortReducer = (
  carsSort = {col:'id', dir: 'asc'}, action ) => {
  if(action.type === SORT_CARS_ACTION){
    if(action.payload.col !== carsSort.col){
      return { col: action.payload.col, dir: 'asc' };
    } else {
      return carsSort.dir === 'asc' ? {...carsSort, dir: 'desc'} : {...carsSort, dir: 'asc'};
    }
  }

  return carsSort;
};

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
});
      