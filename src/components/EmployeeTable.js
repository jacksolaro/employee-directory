import React, {Component} from "react";
import API from "../utils/Api.js";

class EmployeeTable extends Component {
    state = {
        employees: [],
        isSorted: false
    }

    componentDidMount = () => {
        API.getUsers()
            .then(res => {
                console.log(res.data.results)
                this.setState({ employees: res.data.results })
            })
    }

    sortEmployees = () => {
        let sortedEmployees = [...this.state.employees]

        if(this.state.isSorted){
            sortedEmployees.reverse();
        } else {
            sortedEmployees.sort((a,b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0));
        }
        this.setState({employees: sortedEmployees, isSorted: true})
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID Photo</th>
                            <th scope="col"><button>First</button></th>
                            <th scope="col">Last</th>
                            <th scope="col"><button onClick={() => this.sortEmployees()}>Email</button></th>
                            <th scope="col">Phone</th>
                            <th scope="col">Cell</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                            <tr key={employee.id.value}>
                                <td><img src={employee.picture.medium} alt="sample employee ID"/></td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.cell}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default EmployeeTable;
