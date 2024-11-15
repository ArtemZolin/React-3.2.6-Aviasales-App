import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';

import App from './components/app';
import store from './components/store/store'

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={store}><App /></Provider>);

