// State: colors, sortCol, sortDir
// Actions: add, delete, sort

import { combineReducers } from 'redux';

import { 
  ADD_COLOR_ACTION,
  DELETE_COLOR_ACTION,
  SORT_COLORS_ACTION,
  REFRESH_COLORS_DONE_ACTION
} from '../actions/colorToolActions';

// initialize !!
// const colorList = [
//   { id: 1, name : 'red', hexcode: 'ff0000'},
//   { id: 2, name : 'green', hexcode: '00ff00'},
//   { id: 3, name : 'blue', hexcode: '0000ff'},
// ];

// name reducer corespond to component tree(=> on state colors: colorsReducer)
export const colorsReducer = ( colors = [], action ) => {
  if(action.type === REFRESH_COLORS_DONE_ACTION) {
    return action.payload.colors;
  }
  if(action.type === ADD_COLOR_ACTION) {
    return [
      ...colors,
      {
        ...action.payload.color,
        id: Math.max(...colors.map(i => i.id), 0) + 1, 
      }
    ];
  }

  if(action.type === DELETE_COLOR_ACTION) {
    return colors.filter(i => i.id !== action.payload.colorId);
  }

  return colors;
};

export const colorsSortReducer = (colorsSort = { col: 'id', dir: 'asc'}, action) =>{
  if(action.type === SORT_COLORS_ACTION){
    if(colorsSort.col === 'name' && colorsSort.dir === 'desc'){
      return { col: 'id', dir: 'asc'};
    } else if (colorsSort.col === 'id'){
      return { ...colorsSort, col: 'name'};
    } else {
      return { ...colorsSort, dir: 'desc'};
    }
  }

  return colorsSort;
};

// request & done ==> for showing the spinning when we making the request

const isLoadingReducer = (isLoading = false, action) => {
  if(action.type.includes("REQUEST")){
    return true;
  }

  if(action.type.includes("DONE")){
    return false;
  }
  return isLoading;
}


export const colorToolReducer = combineReducers({
  colors: colorsReducer, // state.colors are the argument to the reducer
  colorsSort: colorsSortReducer,
  isLoading: isLoadingReducer,
});


// To use state as argument
/* export const colorsReducer = (state = { colors: [], sortDir: 'asc'}, action) => {}
   const store = createStore(colorsReducer)

export const colorToolReducer = combineReducers({
  colors: colorsReducer,// state.colors are the argument to the reducer
}) */

