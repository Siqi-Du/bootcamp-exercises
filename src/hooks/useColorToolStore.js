import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';

export const useColorToolStore = initialColors => {
  // mapr a copy of colors array to state
  // use , to skip replaceColor
  const [ 
    sortedColors, addColor, , deleteColor, 
    sortCol, setSortCol, sortDir, setSortDir 
  ] = useSortedList(initialColors, 'id', SORT_ASC);

  const sortColors = () => {
    if(sortCol === 'name' && sortDir === SORT_DESC){
      setSortCol('id');
      setSortDir(SORT_ASC);
    } else if (sortCol === 'id') {
      setSortCol('name');
    } else {
      setSortDir(SORT_DESC);
    }
  };

  // one-time use, heavily specialized hook, particular to apecific use,
  // return an object of parameters to have better defined properties
  return {
    // full syntax
    // sortedColors: sortedColors,
    // short-hand syntax
    sortedColors, 
    sortCol, 
    sortDir,  
    addColor, 
    deleteColor, 
    sortColors,
  };
}