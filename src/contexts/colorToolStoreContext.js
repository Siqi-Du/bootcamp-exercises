import { createContext, useContext } from 'react';
import { useColorToolStore } from '../hooks/useColorToolStore';

const colorToolStoreContext = createContext();

// children is <ColorTool />
export const ColorToolStoreProvider = ({ colors, children }) => {
  return(
    <colorToolStoreContext.Provider 
      value={useColorToolStore([...colors])}>
        {children}
    </colorToolStoreContext.Provider>
  );
};

// provide the store via context
export const useColorToolStoreContext = () => {
  return useContext(colorToolStoreContext);
};