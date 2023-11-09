import { useDispatch, useSelector } from 'react-redux';
// import Search from './Search';
import { changeSearchTerm } from '../store/index';
import { AiOutlineSearch, AiFillCaretRight } from 'react-icons/ai';

function ExpenseList() {
  const dispatch = useDispatch();
  const handleChangeSearchTerm = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };
  const searchTerm = useSelector((state) => {
    return state.expense.searchTerm;
  });
  const expenseList = useSelector(({ expense: { data, searchTerm } }) => {
    return data.filter((expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const renderedExpenseList = expenseList.map((expense) => {
    return (
      <a class="panel-block" key={expense.id} href="/">
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
          <input
            class="input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChangeSearchTerm}
          />
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
