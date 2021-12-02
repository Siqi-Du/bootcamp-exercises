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