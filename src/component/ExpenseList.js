import { useDispatch, useSelector } from 'react-redux';
// import Search from './Search';
import { AiOutlineSearch, AiFillCaretRight } from 'react-icons/ai';

function ExpenseList() {
  const expenseList = useSelector((state) => {
    return state.expense.data;
  });
  const renderedExpenseList = expenseList.map((expense) => {
    return (
      <a class="panel-block" key={expense.id}>
        <span class="panel-icon">
          <AiFillCaretRight />
        </span>
        {expense.name} - ${expense.amount}
      </a>
    );
  });
  return (
    <div className="panel">
      <h4 className="panel-heading">All Expenses</h4>

      <div class="panel-block">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Search" />
          <span class="icon is-left">
            <AiOutlineSearch />
          </span>
        </p>
      </div>

      <div className="container is-fluid">{renderedExpenseList}</div>
    </div>
  );
}
export default ExpenseList;
