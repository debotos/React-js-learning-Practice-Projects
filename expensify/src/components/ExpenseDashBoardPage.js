import React from "react";

import ExpensesSummary from './ExpensesSummary';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoardPage = () => (
  <div>
    <ExpensesSummary/>
    <ExpenseListFilters/>
    <ExpenseList/>
  </div>
);

export default ExpenseDashBoardPage;