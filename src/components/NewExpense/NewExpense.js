import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [newDate, setnewDate] = useState(props.date);
  const instantlyUpdateYear = (newYear) => {
    setnewDate(newYear);
  };
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm
        instantlyUpdateYear={instantlyUpdateYear}
        onSaveExpenseForm={savedExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
