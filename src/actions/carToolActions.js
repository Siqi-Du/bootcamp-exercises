// state: cars, editCarId, sortCol, sortDir
// actions: addCar(car) sortCars(col) deleteCar(id) replaceCar(car)
export const ADD_CAR_ACTION = 'ADD_CAR';
export const REMOVE_CAR_ACTION = 'DELETE_CAR';
export const REPLACE_CAR_ACTION = 'REPLACE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_EDIT_CAR_ACTION = 'CANCEL_EDIT_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export const createAddCarAction = (car) => (
  { type: ADD_CAR_ACTION, payload: { car }  }
);

export const createRemoveCarAction = (carId) => (
  { type: REMOVE_CAR_ACTION, payload: { carId } }
);

export const createReplaceCarAction = (car) => (
  { type: REPLACE_CAR_ACTION, payload: { car } }
);

export const createEditCarAction = (editCarId) => (
  { type: EDIT_CAR_ACTION, payload: { editCarId } }
);

export const createCancelEditCarAction = () => (
  { type: CANCEL_EDIT_CAR_ACTION, payload: { editCarId: -1 }}
);

export const createSortCarAction = (col) => (
  {type: SORT_CARS_ACTION, payload: { col }}
);



