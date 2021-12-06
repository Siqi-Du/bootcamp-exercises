// import { combineReducers } from 'redux';
import {
  ADD_ACTION,
  REMOVE_ACTION,
  REPLACE_ACTION,
  EDIT_ACTION,
  CALCEL_EDIT_ACTION,
} from '../actions/carToolActions';

export const carToolReducer = (/* state */ state, action) => {
  switch (action.type) {
    case ADD_ACTION:
      return { 
        cars: [
          ...state.cars,
          {
            ...action.payload.car,
            id: Math.max(...state.cars.map(i => i.id), 0) + 1,
          },
        ] , editCarId: -1 };
    case REMOVE_ACTION:
      return { cars: state.cars.filter(i => i.id != action.payload.car.id), editCarId: -1 };
    case REPLACE_ACTION:
      const copyCars = [ ...state.cars ];
      const index = copyCars.findIndex(c => c.id === action.payload.car.id)
      copyCars[index] = action.payload.car;
      return { cars: copyCars, editCarId: -1 };
    case EDIT_ACTION:
      return { cars: state.cars, editCarId: action.payload.editCarId};
    case CALCEL_EDIT_ACTION:
      return { cars: state.cars, editCarId: -1};
    default:
      return state;
  };
};