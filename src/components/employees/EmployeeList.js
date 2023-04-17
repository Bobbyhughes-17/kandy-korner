
import { useEffect, useState } from "react"

import "./Employees.css"


export const EmployeeList = () => {

    const [employees, setEmployees] = useState([])
  

    useEffect(
        () => {
                fetch(`http://localhost:8088/employees?_expand=user&_expand=location`)
            .then(response => response.json())
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        },
        []
    )
    return  <article className="employees">
    {
        employees.map(employee => {
            return <section className="employee" key={employee.id}>
          
           <div> <strong>Name:</strong>{employee?.user?.fullName} </div>
           <div><strong>Location:</strong>{employee?.location?.address}</div>
          <div><strong>Pay Rate:</strong>{employee?.payRate} </div>
            <div><strong>Start Date:</strong>{employee?.startDate}</div>
            
            </section>
        }       
    )}
    </article>
}