import { Outlet, Route, Routes } from "react-router-dom"
import { ProductsTwo } from "../products/productsTwo"
import { LocationsList } from "../../locations/locations"
import { ProductList } from "../products/products"
import { ProductContainer } from "../products/ProductContainer"
import { ProductForm } from "../products/productForm"


export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1 className="productHead">Kandy Korner</h1>
                    <div>Your one-stop-shop to get your candy fix</div>

                    <Outlet />
                </>
            }>
              <Route path="locations" element={ <LocationsList /> } />

                <Route path="product/create" element={ <ProductForm /> } />
                <Route path="search" element={ <ProductContainer /> } /> 
                <Route path="search" element={ <ProductsTwo /> } />
                
                <Route path="products" element={ <ProductList /> } />
              
            </Route>
        </Routes>
    )
}