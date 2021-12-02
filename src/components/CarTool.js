// import { useState } from 'react';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { useCarToolStore } from '../hooks/useCarToolStore';

export const CarTool = (props) => {

  // const carListItem = props.cars.map(car => {
  //   return ( // return needs () !!!
  //   // list elements 需要有key!: Each child in a list should have a unique "key" prop
  //     <tr key={car.id}>
  //       <td>{car.id}</td>
  //       <td>{car.make}</td>
  //       <td>{car.model}</td>
  //       <td>{car.year}</td>
  //       <td>{car.color}</td>
  //       <td>{car.price}</td>
  //     </tr>
  // )});

  // const [ 
  //   sortedCars, appendCar, replaceCar, removeCar, 
  //   sortCol, setSortCol, sortDir, setSortDir,
  // ] = useSortedList([...props.cars]);
  const store = useCarToolStore([...props.cars]);

  // use an id to indicate which row to edit
  // const [ editCarId, setEditCarId ] = useState(-1);

  // eventHandlers
  /* const addCar = (newCar) => {
    appendCar(newCar);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const editCar = carId => {
    setEditCarId(carId);
  }; */

  // implement save and cancel here, carTool has state
  /* const cancelCar = carId => {
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car); // save is a replace operation
    setEditCarId(-1);
  }; */

  // 注意sort的逻辑 每一列都是单独的sort，当按这一列sort时无需记住其他列之前的sortDir
  /* const sortCars = col => {
    // 如果换列了，默认asc
    if(col !== sortCol){
      setSortCol(col);
      setSortDir(SORT_ASC);
    } else {
      setSortDir(sortDir === SORT_ASC ? SORT_DESC : SORT_ASC);
    }
  }; */

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      {/* prefix eventHandlers with 'on', assigned fn() not use 'on' */}
      <CarTable 
        cars={store.sortedCars} 
        onDeleteCar={store.deleteCar} 
        editCarId={store.editCarId} 
        onEditCar={store.editCar} 
        onCancelCar={store.cancelCar} 
        onSaveCar={store.saveCar}
        onSortCars={store.sortCars}
        sortCol={store.sortCol}
        sortDir={store.sortDir}
      />
      <CarForm buttonText="Add Car" onSubmitCar={store.addCar} />
      <ToolFooter />
    </>
  )
};

CarTool.defaultProps = {
  cars: [],
};