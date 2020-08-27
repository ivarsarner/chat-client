import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as dotenv from 'dotenv';

import { App } from './containers/app';
import { store } from './store';

dotenv.config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
