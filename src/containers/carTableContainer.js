import { useCarToolStoreContext } from '../contexts/carToolStoreContext';
import { CarTable } from '../components/CarTable';

export const CarTableContainer = () => {

  const {
    sortedCars, 
    editCarId,
    sortCol,
    sortDir,
    deleteCar, 
    editCar,
    cancelCar,
    saveCar,
    sortCars,
   } = useCarToolStoreContext();

  return (
    <CarTable 
        cars={sortedCars} 
        onDeleteCar={deleteCar} 
        editCarId={editCarId} 
        onEditCar={editCar} 
        onCancelCar={cancelCar} 
        onSaveCar={saveCar}
        onSortCars={sortCars}
        sortCol={sortCol}
        sortDir={sortDir}
      />
  );
};