import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">&#8377;{props.amount}</div>
          <button
            className="cancel"
            onClick={() => {
              props.onRemove(props.id);
            }}
          >
            X
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
