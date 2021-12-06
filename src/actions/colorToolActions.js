// State: colors, sortCol, sortDir
// Actions: add, delete, sort

export const ADD_COLOR_ACTION = 'ADD_COLOR';
export const DELETE_COLOR_ACTION = 'DELETE_COLOR';
export const SORT_COLORS_ACTION = 'SORT_COLORS';

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
