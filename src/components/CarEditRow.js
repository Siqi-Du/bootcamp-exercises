import { useForm } from '../hooks/useForm';

export const CarEditRow = props => {

  // we only put what can be changed to the state here, to let later developpers know id is not changeable
  const [ carForm, change ] = useForm({
    make: props.car.make,
    model: props.car.model,
    year: props.car.year,
    color: props.car.color,
    price: props.car.price,
  });

  const saveCar = () => {
    const car = {
      ...carForm,
      id: props.car.id,
    };
    props.onSaveCar(car);
  };

  return (
    <tr>
      <td>{props.car.id}</td>
      <td><input type="text" name="make" value={carForm.make} onChange={change} /></td>
      <td><input type="text" name="model" value={carForm.model} onChange={change} /></td>
      <td><input type="text" name="year" value={carForm.year} onChange={change} /></td>
      <td><input type="text" name="color" value={carForm.color} onChange={change} /></td>
      <td><input type="text" name="price" value={carForm.price} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar} >save</button>
        <button type="button" onClick={props.onCancelCar} >cancel</button>
      </td>
    </tr>
  );
}