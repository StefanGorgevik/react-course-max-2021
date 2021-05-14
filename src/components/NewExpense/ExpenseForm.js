import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, setShowForm }) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    // setUserInput({...userInput, title: e.target.value});
    //better way because you get the correct state always
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    onSaveExpenseData(newExpense);
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            type="date"
            min="2021.12.05"
            max="2022.12.31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={setShowForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
