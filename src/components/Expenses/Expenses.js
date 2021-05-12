import React from "react";
import "./Expenses.css";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

export const Expenses = ({expenses}) => {
  return (
    <Card className="expenses">
      {expenses.map((expense, i) => {
        return (
          <ExpenseItem 
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};
