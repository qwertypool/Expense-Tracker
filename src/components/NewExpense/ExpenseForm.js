import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //       title : "",
  //       amount : "",
  //       date : "",
  //   });
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return {...prevState,title: event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.0"
            step="1.0"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2021-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
