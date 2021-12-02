
// index tipically on have an App component
import { render } from 'react-dom'; // named import
import { App } from './components/App';
import './index.css'; // we can import css, webpack will apply it in the build process

render(
  <App />,
  document.querySelector('#root'),
);