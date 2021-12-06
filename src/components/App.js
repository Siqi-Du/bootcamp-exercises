import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ColorToolStoreProvider } from '../contexts/colorToolStoreContext';
import { CarToolStoreProvider } from '../contexts/carToolStoreContext';
import { carToolStore} from '../stores/carToolStore';
import { colorToolStore} from '../stores/colorToolStore';
import { calcToolStore } from '../stores/calcToolStore';

import { Layout } from './Layout';
import { CarTool } from './CarTool';
import { ColorTool } from './ColorTool';
import { CalcTool } from './CalcTool';

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';


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
      <Layout>
        <ToolHeader headerText="The Tools" />

        <nav>
          <ul className="menu">
            <li className="menu-item"><Link to='/'>Home</Link></li>
            <li className="menu-item"><Link to='/color-tool'>Color Tool</Link></li>
            <li className="menu-item"><Link to='/car-tool'>Car Tool</Link></li>
            <li className="menu-item"><Link to='/calc-tool'>Calc Tool</Link></li>
          </ul>
        </nav>

        <main> 
          <Route path='/' exact>
            <h1>Home</h1>
          </Route>
          {/* in real application, we only have 1 store per app */}
          <Route path='/color-tool'>
            <Provider store={colorToolStore}>
              <ColorTool />
            </Provider>
          </Route>
          <Route path='/car-tool'>
            {/* <CarToolStoreProvider cars={carList}>
              <CarTool />
            </CarToolStoreProvider> */}
            {/* <Provider store={carToolStore}>
              <CarTool />
            </Provider> */}
          </Route>
          <Route path='/calc-tool'>
            <Provider store={calcToolStore}>
              <CalcTool />
            </Provider>
          </Route>
        </main>

        <aside>SideBar</aside>

        <ToolFooter />
      </Layout>
    </Router>
  );
  
};
