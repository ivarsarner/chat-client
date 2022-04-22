import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as dotenv from 'dotenv';

import { App } from './containers/app';
import { store } from './store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
