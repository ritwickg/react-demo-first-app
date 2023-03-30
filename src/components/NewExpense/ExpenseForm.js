import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // States
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [epxenseDate, setExpenseDate] = useState("");
  // Event Handelers
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setExpenseDate(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} value={title}></input>
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            onChange={handleAmountChange}
            value={amount}
          ></input>
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
