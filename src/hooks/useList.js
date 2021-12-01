import { useState } from 'react';

// custome hook to manage a list
// reusable stateful logic
export const useList = initialItems => {
  const [ items, setItems ] = useState(initialItems);

  const appendItem = newItem => {
    setItems([
      ...items,
      {
        ...newItem,
        id: Math.max(...items.map(i => i.id), 0) + 1, // 用len的话如果delete就重了
      }
    ]);

    console.log(items);
    // still log the original props.cars here???
    // 1. cars array get changed(state changes in CarTool), 
    // 2. then it re-render everything in CarTool and uner (and assign the new cars object to cars)
  };

  const replaceItem = item => {
    // map is slow :iterating the array and do some operation on each element
    // you still iterating whole array if the car is just the first item
    
    const newItems = [ ...items ]; // copy the array
    const itemIndex = newItems.findIndex(c => c.id === item.id);
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    // filter: if the element exist in the array, return true and keep this item
    // filter produce a new array
    setItems(items.filter(i => i.id != itemId));
  };

  return [ items, appendItem, replaceItem, removeItem];
}