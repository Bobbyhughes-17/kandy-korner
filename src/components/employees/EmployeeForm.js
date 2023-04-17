import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const EmployeeForm = () => {


        const [loc, setLoc] = useState([])

        useEffect(
            () => {
                fetch(`http//localhost:8088/locations`)
                .then(response => response.json())
                .then((data) => {setLoc(data)})
            },
            [])

            const [userArr, setUser] = useState([])

            useEffect(
                () => {
                    fetch(`http://localhost:8088/users`)
                    .then(response => response.json())
                    .then((data) => {setUser(data)})
                },
                [])
  
        const [user, updateUser] = useState({
            id: parseInt(""),
            fullName: "",
            email: "",
            isStaff: true
        })

        const [employee, updateEmployee] = useState({
            userId: parseInt(""),
            payRate: parseInt(""),
            startDate: "",
            locationId: parseInt("")
        })
        const navigate = useNavigate()

        const localUser = localStorage.getItem("kandy_user")
        const userObject = JSON.parse(localUser)
        

        const handleSaveButtonClick = (event) => {
                event.preventDefault()

                const newUserId = userArr.length + 1

            const employeeToSendToAPI = {
                userId: newUserId,
                locationId: employee.locationId,
                startDate: employee.startDate,
                payRate: employee.payRate
            }

            const userToSendToAPI = {
                id: newUserId,
                fullName: user.fullName,
                email: user.email,
                isStaff: true
            }

            return fetch(`http://localhost:8088/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userToSendToAPI)
            })
            .then(response => response.json())
            .then(fetch(`http://localhost:8088/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(employeeToSendToAPI)
            })
            .then(response => response.json())

            .then(() => {
                navigate("/employees")
            })
            )
        }

 return (
        <form className="newemployees">
            <h2 className="employeeForm__title">New Employee Form</h2>

            {}

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        value={user.fullName}
                        onChange={
                            (event) => {
                                const copy = {...user}
                                copy.fullName = event.target.value
                                updateUser(copy)
                            }
                        } />
                </div>
            </fieldset>

            

            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Email "
                        value={user.email}
                        onChange={
                            (event) => {
                                const copy = {...user}
                                copy.email = event.target.value
                                updateUser(copy)
                            }
                        } />
                </div>
            </fieldset>
            

            <fieldset>
            <div className="form-group">
                    <label htmlFor="locations">Location:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Location ID here"
                        value={user.locationId}
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.locationId = event.target.value
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset> 
            

            <fieldset>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        required autoFocus
                        type="date"
                        className="form-control"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.startDate = event.target.value
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            

                  <fieldset>
                <div className="form-group">
                    <label htmlFor="payRate">Pay Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Pay Rate"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.payRate = event.target.value
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <button 
                onClick={(event) => {handleSaveButtonClick(event)}}
                className="btn btn-primary">
                Submit New Hire
            </button>
        </form>
    )
}
