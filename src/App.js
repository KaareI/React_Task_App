import './App.css';
import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseDate from "./components/Expenses/ExpenseDate";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date: new Date(2024, 0, 10),
        title: 'New book',
        price: 'Medium'
    },
    {
        id: 'e2',
        date: new Date(2024, 0, 10),
        title: 'New jacket',
        price: 'Medium'
    }
]
const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpensehandler = (expense) => {
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        })
    }

return (
    <div className="App">
        <NewExpense onAddExpense={addExpensehandler}></NewExpense>
        <Expenses expenses={expenses}></Expenses>
    </div>
);
}

export default App;
