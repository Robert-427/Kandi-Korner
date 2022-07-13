import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../tickets/locationList"
import { ProductsList } from "../tickets/productList"

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Kandy Korner Shop</h1>
					<Outlet />
				</>
			}>
				<Route path="locations" element={ <LocationList /> } />
				<Route path="products" element={ <ProductsList /> } />
			</Route>
		</Routes>
	)
}

