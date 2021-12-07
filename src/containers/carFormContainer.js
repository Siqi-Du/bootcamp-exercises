import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
// import { useCarToolReduxStore } from '../hooks/useCarToolReduxStore';

import { CarForm } from '../components/CarForm';

// less dependent on props
export const CarFormContainer = () => {
  // const store = useCarToolReduxStore();
  const { addCar } = useCarToolStoreContext();
  // const addCar = () => {
  //   store.appendCar()
  //   store.editCar()
  // };
   
  return (
    <CarForm buttonText="Add Car" onSubmitCar={addCar} />
  );
};