// import { useState } from 'react';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
// import { CarTable } from './CarTable';
// import { CarForm } from './CarForm';
// import { useCarToolStore } from '../hooks/useCarToolStore';
// import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { CarFormContainer } from '../containers/carFormContainer';
import { CarTableContainer } from '../containers/carTableContainer';

export const CarTool = () => {

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

  //object destructering
  // name need to match, its namebased. order does not matter
  // const {
  //   sortedCars, 
  //   editCarId,
  //   sortCol,
  //   sortDir,
  //   addCar, 
  //   deleteCar, 
  //   editCar,
  //   cancelCar,
  //   saveCar,
  //   sortCars,
  //  } = useCarToolStoreContext();
  // const store = useCarToolStore([...props.cars]);

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
      <CarTableContainer />
      <CarFormContainer />
      <ToolFooter />
    </>
  )
};

CarTool.defaultProps = {
  cars: [],
};