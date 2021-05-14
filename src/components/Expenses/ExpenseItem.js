import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <p className="expense-item__price">${amount}</p>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
