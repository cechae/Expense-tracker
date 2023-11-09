import Form from './component/Form';
import ExpenseList from './component/ExpenseList';
import Landing from './component/Landing';
function App() {
  return (
    <div className="container fluid">
      <div className="column">
        <Landing />

        <ExpenseList />
        <Form />
      </div>
    </div>
  );
}
export default App;
