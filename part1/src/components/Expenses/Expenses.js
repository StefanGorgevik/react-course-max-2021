import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export const Expenses = ({ expenses }) => {
  const [filter, setFilter] = useState("2021");

  const filterHandler = (selectedYear) => {
    setFilter(selectedYear);
  };

  const filtered = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterHandler} selectedYear={filter} />
      <ExpensesChart expenses={filtered} />
      <ExpensesList expenses={filtered} />
    </Card>
  );
};
