export const CarViewRow = props => {
  // CarViewRow not have the state, it cannot change the car
  // NO: const [ car ] = useState(props.car);
  
  const deleteCar = () => {
    props.onDeleteCar(props.car.id);
  }

  return (
    // no need key here because <tr> is not generated dynamically siblings
    <tr>
      <td>{props.car.id}</td>
      <td>{props.car.make}</td>
      <td>{props.car.model}</td>
      <td>{props.car.year}</td> 
      <td>{props.car.color}</td>
      <td>{props.car.price}</td>
      <td>
        {/* onClick={props.onDeleteCar(props.car.id)} ==> NO!!!
        cannot write fn() code here: onClick expects a fn(), but the inline fn() will perform a delete action on render,
        we have to use a inline fn() here: onClick={() => props.onDeleteCar(props.car.id)} */}
        <button type="button" onClick={deleteCar}>Delete</button>
      </td>
    </tr>
  );
};

CarViewRow.defaultProps = {
  car: {
    id: '',
    make: '',
    model: '',
    year: '',
    color: '',
    price: '',
  },
};