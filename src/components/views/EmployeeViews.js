import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductsList } from "../products/ProductList"
import { ProductForm } from "../products/ProductForm"
import { EmployeeForm } from "../employees/EmployeeForm"
import { EmployeeList } from "../employees/EmployeeList"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"


export const EmployeeViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1 className="header">Kandy Korner Shop</h1>
					<Outlet />
				</>
			}>
				<Route path="locations" element={<LocationList />} />
				<Route path="products" element={<ProductsList />} />
				<Route path="product/create" element={<ProductForm />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="employee/create" element={<EmployeeForm />} />
                <Route path="customers" element={<CustomerList />} />
                <Route path="customers/:customerId" element={ <CustomerDetails />} />
			</Route>
		</Routes>
	)
}
