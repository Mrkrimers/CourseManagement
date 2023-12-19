import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

import '@mantine/core/styles.css';
import './index.scss';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import store from '../src/store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>

  </Provider>
)
