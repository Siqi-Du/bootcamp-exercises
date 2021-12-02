import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;
const cols = [
  ['Id', 'id'],
  ['Make', 'make'],
  ['Model', 'model'],
  ['Year', 'year'],
  ['Color', 'color'],
  ['Price', 'price'],
]
export const CarTable = (props) => {
  // pass props accross 2 level of components
  // directly call in return cause these 2 fn() is the same
  /* const onDeleteCar = (carToDelete) => {
    props.onDeleteCar(carToDelete.id);
  }; */
  const sortDirectionIndicator = sortCol => {
    if (sortCol === props.sortCol){
      return props.sortDir === 'asc' ? 'v' : '^';
    }
    return '';
  }

  return (
    <table>
        <thead>
        {isEmpty(props.cars)
          ? <tr><th>No Cars</th></tr>
          :
          <tr>
            {cols.map(([header, field]) => 
              <th key={field}>
                <button type="button" onClick={() => props.onSortCars(field)}>
                  {header}{sortDirectionIndicator(field)}
                </button>
              </th>
            )}
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