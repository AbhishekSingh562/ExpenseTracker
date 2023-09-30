import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  // {
  //   id: "e1",
  //   title: "News Paper",
  //   amount: 300,
  //   date: new Date(2020, 7, 14),
  // },
  // { id: "e2", title: "New TV", amount: 10000, date: new Date(2021, 2, 12) },
  // {
  //   id: "e3",
  //   title: "Car Insurance",
  //   amount: 7000,
  //   date: new Date(2021, 2, 28),
  // },
  // {
  //   id: "e4",
  //   title: "New Desk (Wooden)",
  //   amount: 2500,
  //   date: new Date(2021, 5, 12),
  // },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //function to remove items from list
  const removeExpenseHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onRemove={removeExpenseHandler} />
    </div>
  );
};

export default App;
