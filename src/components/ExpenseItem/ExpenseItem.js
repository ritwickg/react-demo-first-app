import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  // States definitions
  const [expenseTitle, setExpenseTitle] = useState(props.title);

  const changeTitleHandler = () => {
    setExpenseTitle("title updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={changeTitleHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
