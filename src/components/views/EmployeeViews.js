import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductsList } from "../products/ProductList"
import { ProductForm } from "../products/ProductForm"
import { EmployeeForm } from "../employees/EmployeeForm"
import { EmployeeList } from "../employees/EmployeeList"


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
                <Route path="employee/create" element={<EmployeeForm />} />
                <Route path="employees" element={<EmployeeList />} />
			</Route>
		</Routes>
	)
}
