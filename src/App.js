import './App.css';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <div className="">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">EMPLOYEE DIRECTORY</h1>
          <p className="lead">Looking for an employee? We've got some.</p>
        </div>
      </div>
      <EmployeeTable></EmployeeTable>
    </div>
  );
}

export default App;
