import { useState } from 'react';
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

  const [ cars, setCars ] = useState([...props.cars]);

  // const change = e => {
  //   setCarForm({
  //     ...carForm,
  //     // [ e.target.name ]: e.target.type === 'number'? parseInt(e.target.value, 10) : e.target.value,
  //      // input is always string, we can convert to int
  //     [ e.target.name ]: e.target.value,
  //   });
  // };
  // console.log(carForm);

  const addCar = (newCar) => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      }
    ]);
  };

  const deleteCar = carId => {
    // filter: if the element exist in the array, return true and keep this item
    // filter produce a new array
    setCars(cars.filter(car => car.id !== carId));
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar}/>
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter />
    </>
  )
};

CarTool.defaultProps = {
  cars: [],
};