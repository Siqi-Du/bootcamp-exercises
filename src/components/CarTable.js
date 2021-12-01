import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

export const CarTable = (props) => {
  // pass props accross 2 level of components
  // directly call in return cause these 2 fn() is the same
  // const onDeleteCar = (carToDelete) => {
  //   props.onDeleteCar(carToDelete.id);
  // };

  return (
    <table>
        <thead>
        {isEmpty(props.cars)
          ? <tr><th>No Cars</th></tr>
          :
          <tr>
            <th>Id</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>}
        </thead>
        <tbody>
          {/* key is applied in dynamic diblings */}
          {props.cars.map(car => 
            car.id === props.editCarId
            ? <CarEditRow key={car.id} car={car} onCancelCar={props.onCancelCar} onSaveCar={props.onSaveCar} />
            : <CarViewRow key={car.id} car={car} onDeleteCar={props.onDeleteCar} onEditCar={props.onEditCar} />
          )}
        </tbody>
      </table>
  );
};
// real dom need <thead> and <tbody>, 
// so there'll be console errors if they are not in virtual dom

CarTable.defaultProps = {
  cars: [],
};