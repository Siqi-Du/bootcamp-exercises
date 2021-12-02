import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CarTool } from './CarTool';
import { ColorTool } from './ColorTool';
import { ColorToolStoreProvider } from '../contexts/colorToolStoreContext';
import { CarToolStoreProvider } from '../contexts/carToolStoreContext';

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

export const App = () => {

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/color-tool'>Color Tool</Link></li>
          <li><Link to='/car-tool'>Car Tool</Link></li>
        </ul>
      </nav>

      <Route path='/' exact>
        <h1>Home</h1>
      </Route>
      <Route path='/color-tool'>
        <ColorToolStoreProvider colors={colorList}>
          <ColorTool />
        </ColorToolStoreProvider>
      </Route>
      <Route path='/car-tool'>
        <CarToolStoreProvider cars={carList}>
          <CarTool />
        </CarToolStoreProvider>
      </Route>
    </Router>
  );
  
};
