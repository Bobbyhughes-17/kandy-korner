import { Outlet, Route, Routes } from "react-router-dom"
import { LocationsList } from "../../locations/locations"
import { ProductList } from "../products/products"
import { EmployeeList } from "../employees/EmployeeList"
import { EmployeeForm } from "../employees/EmployeeForm"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"

export const EmployeeViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="productHead">Kandy Korner</h1>
                    <div className="tagline">Your one-stop-shop to get your candy fix</div>

                    <Outlet />
                </>
            }>

                <Route path="products" element={ <ProductList /> } />
                <Route path="locations" element={ <LocationsList /> } />
                <Route path="employees" element={ <EmployeeList /> } />
                <Route path="newemployees" element={ <EmployeeForm /> } />
                <Route path="customers" element={ <CustomerList /> } />
                <Route path="customers/:customerId" element={ <CustomerDetails /> } />
            </Route>
        </Routes>
    )
}