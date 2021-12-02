import { useState } from 'react';
import { useList } from './useList';

export const SORT_ASC = 'asc';
export const SORT_DESC = 'desc';

const defaultSortItems = (unsortedItems, sortCol, sortDir) => {
  const items = [ ...unsortedItems ];
  return items.sort((a, b) => {

    if(a[sortCol] < b[sortCol]){
      return sortDir === SORT_ASC? -1 : 1;
    }

    if(a[sortCol] > b[sortCol]){
      return sortDir === SORT_ASC? 1 : -1;
    }

    return 0;
  });
};

// 使在model change -> render vDOM时sort， 而不是fn() change -> model change 时sort
// 如果在 fn() change -> model change 时sort, add a new element 不会被添加到sort的位置
export const useSortedList = (
  initialItems, initialColumn, initialDirection, sortItems = defaultSortItems) => {
  
  const [ items, appendItem, replaceItem, removeItem ] = useList(initialItems);

  const [ sortCol, setSortCol ] = useState(initialColumn);
  const [ sortDir, setSortDir ] = useState(initialDirection);


  return  [ 
    sortItems(items, sortCol, sortDir), 
    appendItem, replaceItem, removeItem, 
    sortCol, setSortCol, 
    sortDir, setSortDir,
  ];
}