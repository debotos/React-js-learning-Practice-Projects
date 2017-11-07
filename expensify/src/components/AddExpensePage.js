import React, { Component } from "react";
import { connect } from "react-redux";

import { startAddExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <div >
          <div className="content-container">
            <h1 className="page-header-title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
