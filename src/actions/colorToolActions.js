// State: colors, sortCol, sortDir
// Actions: add, delete, sort

import { all, append, remove } from '../apis/colors';

export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const ADD_COLOR_REQUEST_ACTION = 'ADD_COLOR_REQUEST';
export const ADD_COLOR_DONE_ACTION = 'ADD_COLOR_DONE';
export const DELETE_COLOR_REQUEST_ACTION = 'DELETE_COLOR_REQUEST';
export const DELETE_COLOR_DONE_ACTION = 'DELETE_COLOR_DONE';

export const ADD_COLOR_ACTION = 'ADD_COLOR';
export const DELETE_COLOR_ACTION = 'DELETE_COLOR';
export const SORT_COLORS_ACTION = 'SORT_COLORS';

// request & done ==> for showing the spinning when we making the request
export const createRefreshColorsRequestAction = () => ({
  type: REFRESH_COLORS_REQUEST_ACTION
});

export const createRefreshColorsDoneAction = colors => ({
  type: REFRESH_COLORS_DONE_ACTION, payload: { colors }
});

export const refershColors = () => {

  // this function is the function action object
  // when the middleware invokes this function is passes in the store's dispatch method
  return (dispatch) => {
    dispatch(createRefreshColorsRequestAction());
    return all().then(colors => {
      dispatch(createRefreshColorsDoneAction(colors));
    });
  }
}


export const createAddColorRequestAction = color => ({
  type: ADD_COLOR_REQUEST_ACTION, payload: { color }
});
export const createAddColorDoneAction = color => ({
  type: ADD_COLOR_DONE_ACTION, payload: { color }
});

export const addColor = color => {

  return dispatch => {
    dispatch(createAddColorRequestAction(color));
    append(color).then(() => dispatch(refershColors()));
  };
}

export const createDeleteColorRequestAction = colorId => ({
  type: DELETE_COLOR_REQUEST_ACTION, payload: { colorId }
});

export const createDeleteColorDoneAction = colorId => ({
  type: DELETE_COLOR_DONE_ACTION, payload: { colorId }
});

export const deleteColor = colorId => {
  return dispatch => {
    dispatch(createDeleteColorRequestAction(colorId));
    remove(colorId).then(() => dispatch(refershColors()));
  };
};


// export const createAddColorAction = color => ({
//   type: ADD_COLOR_ACTION, payload: { color }
// });

// export const createDeleteColorAction = colorId => ({
//   type: DELETE_COLOR_ACTION, payload: { colorId }
// });

// your acions don't tied with your state tree structure
// sort don't have any params, just sort the existing colors
export const createSortColorAction = () => ({
  type: SORT_COLORS_ACTION
});
