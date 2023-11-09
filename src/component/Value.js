import { useSelector } from 'react-redux';

function Value() {
  const expenseValue = useSelector(({ expense: { data, searchTerm } }) => {
    const totalAmount = data.filter((expense) => {
      return expense.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    let amt = 0;
    for (let i of totalAmount) {
      amt += i.amount;
    }
    return amt;
  });
  return (
    <div className="panel-block">
      <h1>
        <strong>Total: ${expenseValue}</strong>
      </h1>
    </div>
  );
}
export default Value;
