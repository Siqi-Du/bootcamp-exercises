// State: colors, sortCol, sortDir
// Actions: add, delete, sort

import { all } from '../apis/colors';

export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';
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

export const createAddColorAction = color => ({
  type: ADD_COLOR_ACTION, payload: { color }
});

export const createDeleteColorAction = colorId => ({
  type: DELETE_COLOR_ACTION, payload: { colorId }
});

// your acions don't tied with your state tree structure
// sort don't have any params, just sort the existing colors
export const createSortColorAction = () => ({
  type: SORT_COLORS_ACTION
});
