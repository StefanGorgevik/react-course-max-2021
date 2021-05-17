import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    onAddExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          showForm={showForm}
          setShowForm={() => setShowForm(!showForm)}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={() => setShowForm(!showForm)}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
