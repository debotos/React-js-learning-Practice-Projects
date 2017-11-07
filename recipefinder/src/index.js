import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';
import configureStore from './store/configureStore';

const store = configureStore();
store.subscribe(() => console.log(store.getState()));

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/favorites' component={FavoriteRecipeList}/>
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));