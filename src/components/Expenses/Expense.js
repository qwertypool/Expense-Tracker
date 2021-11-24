import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
// import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
// import Card from "../UI/Card";

function Expense(props) {
  const [filterYear, setfilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
    console.log("From expenses");
    console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList item={filteredExpenses} />
      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses made</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      )} */}
    </div>
  );
}

export default Expense;
