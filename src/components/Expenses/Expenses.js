import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../Card/Card";

const Expenses = (props) => {
  const expensesList = props.expenses.map((x) => {
    return (
      <Card key={x.id}>
        <ExpenseItem
          title={x.title}
          price={x.amount}
          date={x.date}
        ></ExpenseItem>
      </Card>
    );
  });

  return <div className="expenses">{expensesList}</div>;
};

export default Expenses;
