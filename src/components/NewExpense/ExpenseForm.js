import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // States
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [epxenseDate, setExpenseDate] = useState("");
  const [userInput, setUserInput] = useState({
    title: "",
    expenseAmount: "",
    expenseDate: "",
  });
  // Event Handelers
  const handleTitleChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const handleAmountChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        expenseAmount: event.target.value,
      };
    });
  };

  const handleDateChange = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        expenseDate: event.target.value,
      };
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange}></input>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" min={0.01} onChange={handleAmountChange}></input>
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2023-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
