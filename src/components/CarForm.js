import { useState } from 'react';

export const CarForm = props => {

  const [ carForm, setCarForm ] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  });

  const change = e => {
    setCarForm({
      ...carForm,
      // [ e.target.name ]: e.target.type === 'number'? parseInt(e.target.value, 10) : e.target.value,
       // input is always string, we can convert to int
      [ e.target.name ]: e.target.value,
    });
  };
  console.log(carForm);

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });
    setCarForm({
      make: '',
      model: '',
      year: '',
      color: '',
      price: '',
    });
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