import { Outlet, Route, Routes } from "react-router-dom"
import { LocationList } from "../tickets/locationList"
import { ProductsList } from "../tickets/productList"
import { ProductForm } from "../tickets/productForm"
import { StorePic } from "../images/imageForms"

export const ApplicationViews = () => {
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
			</Route>
		</Routes>
	)
}
