// import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { useCarToolReduxStore } from '../hooks/useCarToolReduxStore';

import { CarForm } from '../components/CarForm';

// less dependent on props
export const CarFormContainer = () => {

  const { addCar } = useCarToolReduxStore();

  return (
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
  );
};