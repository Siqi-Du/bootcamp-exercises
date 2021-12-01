import { useForm } from '../hooks/useForm';

export const CarForm = props => {

  const [ carForm, change, resetCarForm ] = useForm({
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  });

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
    resetCarForm();
  };

  return (
    <form>
        <label>
          Make:
          <input type="text" name="make" value={carForm.make} onChange={change} />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={carForm.model} onChange={change} />
        </label>
        <label>
          Year:
          <input type="text" name="year" value={carForm.year} onChange={change} />
          {/* since type = string, will output as string for user input */}
        </label>
        <label>
          Color:
          <input type="text" name="color" value={carForm.color} onChange={change} />
        </label>
        <label>
          Price:
          <input type="text" name="price" value={carForm.price} onChange={change} />
        </label>
        <button type="button" onClick={submitCar}>{props.buttonText}</button>
      </form>
  );
}