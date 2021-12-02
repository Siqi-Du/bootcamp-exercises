import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { CarForm } from '../components/CarForm';

// less dependent on props
export const CarFormContainer = () => {

  const { addCar } = useCarToolStoreContext();
   
  return (
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
  );
};