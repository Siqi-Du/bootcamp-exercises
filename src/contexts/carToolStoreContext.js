import { createContext, useContext } from 'react';
import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext();

// a context with a store
export const CarToolStoreProvider = ({ cars, children }) => {
  return(
    <carToolStoreContext.Provider 
      value={useCarToolStore([...cars])}>
        {children}
    </carToolStoreContext.Provider>
  );
};

// provide the store via context
export const useCarToolStoreContext = () => {
  return useContext(carToolStoreContext);
};