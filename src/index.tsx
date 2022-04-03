import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './components/store';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if(!rootElement) throw new Error ('Failed to load the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(<Provider store={store}><App/></Provider>);
