import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';

import configureStore from './store/configureStore';
import App, { history } from './components/App';
import { startSetExpenses } from './actions/expenses';
import { firebase } from './firebase/firebase';
import { login, logout } from './actions/auth';
import './styles/index.css';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App/>
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
}

ReactDOM.render(<LoadingPage/>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  }else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});