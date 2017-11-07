import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';
import { fetchMemes } from './actions';

const store = configureStore();
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));