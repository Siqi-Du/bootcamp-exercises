export const ADD_ACTION = 'ADD';
export const REMOVE_ACTION = 'DELETE';
export const REPLACE_ACTION = 'REPLACE';
export const EDIT_ACTION = 'EDIT';
export const CALCEL_EDIT_ACTION = 'CANCEL_EDIT';

export const createAddCarAction = (car, editCarId) => (
  { type: ADD_ACTION, payload: { car, editCarId }  }
);

export const createRemoveCarAction = (car, editCarId) => (
  { type: REMOVE_ACTION, payload: { car, editCarId } }
);

export const createReplaceCarAction = (car, editCarId) => (
  { type: REPLACE_ACTION, payload: { car, editCarId } }
);

export const createEditCarAction = (car, editCarId) => (
  { type: EDIT_ACTION, payload: { car, editCarId } }
);

export const createCancelEditCarAction = (car, editCarId) => (
  { type: CALCEL_EDIT_ACTION, payload: { car, editCarId }}
);



