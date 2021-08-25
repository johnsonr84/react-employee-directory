import React, { useState, useEffect } from 'react';
import API from "./utils/API";
import Header from './components/Header';
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [employees, setEmployees] = useState([]);
  const [empData, empSearchData] = useState("");
  const [dataValue, setDataValue] = useState('name.first');
  const [sortValue, setSortValue] = useState(-1);

  useEffect(() => {
    API.getEmployees()
      .then((res) => res.data.results)
      .then((data) => data.map(({ name, phone, email, picture }) => ({
        name,
        phone,
        email,
        image: picture.thumbnail
      })))
      .then(setEmployees);
  }, []);

  const empDataRegExp = new RegExp(empData, "i")
  const getData = (employee) => {
    switch (dataValue) {
      case "name.first":
        return employee.name.first
      case "name.last":
        return employee.name.last
      default:
        return employee[dataValue]
    }
  }

    const updateData = (data) => {
      if (dataValue === data) {
        setSortValue(-sortValue)
      }
      else setDataValue(data)
    }


    return (
      <>
        <Header />

        <SearchBar empSearchData={empSearchData} />

        <div className="card container p-0 text-left">
          <div className="table-responsive">

            <table className="table table-dark table-striped ">
              <thead>
                <tr>
                  <th onClick={() => updateData("name.first")}>Name <FontAwesomeIcon icon={faSort} /></th>
                  <th>Image</th>
                  <th>Phone Number</th>
                  <th onClick={() => updateData("email")}>Email <FontAwesomeIcon icon={faSort} /></th>
                </tr>
              </thead>

              <tbody className="tableRow content">
                {employees
                  .filter((employee) =>
                    empDataRegExp.test(employee.name.first) ||
                    empDataRegExp.test(employee.name.last) ||
                    empDataRegExp.test(employee.email)
                  ).sort((employeeA, employeeB) => {
                    const a = getData(employeeA)
                    const b = getData(employeeB)
                    if (a < b) {
                      return sortValue
                    }
                    if (a > b) {
                      return -sortValue
                    }
                    return 0
                  })
                  .map(employee => (
                    < Table
                      name={employee.name.first + " " + employee.name.last}
                      image={employee.image}
                      phone={employee.phone}
                      email={employee.email}
                    />
                  ))}
              </tbody>

            </table >
          </div>
        </div>
      </>
    );
  }

  export default App;
