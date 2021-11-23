import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
// import Card from "../UI/Card";

function Expense(props) {
  const [filterYear, setfilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
    console.log("From expenses");
    console.log(selectedYear);
  };
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      />
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      />
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      />
    </div>
  );
}

export default Expense;
