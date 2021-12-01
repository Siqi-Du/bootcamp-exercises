import { useState } from 'react';
import { useList } from '../hooks/useList';
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  // const cars = [
  //   {id: 1, make: 'Tesla', model: 'X', year: '2020', color: 'black', price: '--'},
  //   {id: 2, make: 'Tesla', model: 'Y', year: '2021', color: 'white', price: '--'},
  // ];

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

  // const [ carForm, setCarForm ] = useState({
  //   make: '',
  //   model: '',
  //   year: '',
  //   color: '',
  //   price: '',
  // });

  const [ cars, appendCar, replaceCar, removeCar ] = useList([...props.cars]);

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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      {/* prefix eventHandlers with 'on', assigned fn() not use 'on' */}
      <CarTable cars={cars} onDeleteCar={deleteCar} editCarId={editCarId} onEditCar={editCar} onCancelCar={cancelCar} onSaveCar={saveCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter />
    </>
  )
};

CarTool.defaultProps = {
  cars: [],
};