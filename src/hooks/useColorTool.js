import { useColorToolStoreContext } from '../contexts/colorToolStoreContext';
import { useColorToolStore } from '../hooks/useColorToolStore';

export const useColorTool = (noContext = false) => {
  // data can be managed to choose which store
  /* const storeA = useColorToolStoreContext();
  const storeB = useColorToolStore();
  return noContext ? storeB : storeA; */

  return useColorToolStoreContext();
}