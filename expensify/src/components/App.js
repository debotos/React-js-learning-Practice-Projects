import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import ExpenseDashboardPage from './ExpenseDashBoardPage';
import HelpPage from './HelpPage';
import NotFoundpage from './NotFoundPage';
import LoginPage from './LoginPage';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
            <PrivateRoute path="/create" component={AddExpensePage}/>
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundpage} />
          </Switch>
        </div>
      </Router>
    )
  }
}
