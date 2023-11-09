import { changeName, changeAmount, addExpense } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';

function Form() {
  const dispatch = useDispatch();
  const { name, amount } = useSelector((state) => {
    return {
      name: state.form.name,
      amount: state.form.amount,
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({
        name: name,
        amount: amount,
      })
    );
  };
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleAmountChange = (e) => {
    dispatch(changeAmount(e.target.value));
  };

  return (
    <div className="form panel">
      <h4 className="panel-heading">Add Expense</h4>
      <form onSubmit={handleSubmit}>
        <div className="container is-fluid">
          <div className="field ">
            <label className="label">Name</label>
            <input
              placeholder="Name of the expense"
              className="input"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Amount</label>
            <input
              placeholder="Amount of the expense"
              className="input"
              value={amount ? amount : ''}
              onChange={handleAmountChange}
            />
          </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;
