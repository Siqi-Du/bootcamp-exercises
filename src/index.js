import { render } from 'react-dom'; // named import
// import { HelloWorld } from './components/HelloWorld';
import { CarTool } from './components/CarTool';
import { ColorTool } from './components/ColorTool';
import './index.css'; // we can import css, webpack will apply it in the build process
import { ColorToolStoreProvider } from './contexts/colorToolStoreContext';
import { CarToolStoreProvider } from './contexts/carToolStoreContext';

const colorList = [
  { id: 1, name : 'red', hexcode: 'ff0000'},
  { id: 2, name : 'green', hexcode: '00ff00'},
  { id: 3, name : 'blue', hexcode: '0000ff'},
];

// boolean isEditable is not good
const carList = [
  {id: 1, make: 'Tesla', model: 'X', year: '2020', color: 'black', price: '--'},
  {id: 2, make: 'Tesla', model: 'Y', year: '2021', color: 'white', price: '--'},
];

render(
  <>
    <ColorToolStoreProvider colors={colorList}>
      <ColorTool />
    </ColorToolStoreProvider>
    
    <CarToolStoreProvider cars={carList}>
      <CarTool />
    </CarToolStoreProvider>
  </>,
  document.querySelector('#root'),
)