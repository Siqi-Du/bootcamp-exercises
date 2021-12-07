import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';
import { useState } from 'react';

export const useCarToolStore = initialCars => {
  const [ 
    sortedCars, appendCar, replaceCar, removeCar, 
    sortCol, setSortCol, sortDir, setSortDir,
  ] = useSortedList([...initialCars]);

  // use an id to indicate which row to edit
  const [ editCarId, setEditCarId ] = useState(-1);

  // eventHandlers
  const addCar = (newCar) => {
    appendCar(newCar);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  }

  const editCar = carId => {
    setEditCarId(carId);
  }

  // implement save and cancel here, carTool has state
  const cancelCar = carId => {
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car); // save is a replace operation
    setEditCarId(-1);
  };

  // 注意sort的逻辑 每一列都是单独的sort，当按这一列sort时无需记住其他列之前的sortDir
  const sortCars = col => {
    // 如果换列了，默认asc
    if(col !== sortCol){
      setSortCol(col);
      setSortDir(SORT_ASC);
    } else {
      setSortDir(sortDir === SORT_ASC ? SORT_DESC : SORT_ASC);
    }
  };

  // 用{}不用在意order了
  return {
    sortedCars, 
    editCarId,
    sortCol,
    sortDir,
    addCar, 
    deleteCar, 
    editCar,
    cancelCar,
    saveCar,
    sortCars,
  };
}