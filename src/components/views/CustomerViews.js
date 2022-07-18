import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../locations/LocationList"
import { ProductContainer } from "../products/ProductContainer"

export const CustomerViews = () => {
	return (
		<Routes>
			<Route path="/" element={
				<>
					<h1 className="header">Kandy Korner Shop</h1>
					<Outlet />
				</>
			}>
				<Route path="locations" element={<LocationList />} />
                <Route path="search" element={<ProductContainer />} />
			</Route>
		</Routes>
	)
}
