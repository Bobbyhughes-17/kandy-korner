import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./products.css"

export const ProductList = ({ searchTermState }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [priceOnly, updatePrice] = useState(false)
    const navigate = useNavigate()

    const localUser = localStorage.getItem("kandy_user")
    const userObject = JSON.parse(localUser)

    useEffect(
        () => {
            const searchedProducts = products.filter(product => product.name.toLowerCase().startsWith(searchTermState.toLowerCase()))
            setFiltered(searchedProducts)
        },
        [ searchTermState ]
    )


    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_sort=name&_order=asc&_expand=productType`)
            .then(response => response.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        []
    )

    useEffect(
        () => {
           if (priceOnly) {
            const priceOnlyArray = products.filter(product => {
                return product.price > 2.0
            })
            setFiltered(priceOnlyArray)
           } 
           else {
            setFiltered(products)
           }
        },
        [priceOnly, products]
    )

    return <>
        <h2>List of Products</h2>
        <article className="products">
            {filteredProducts.map(
                (product) => {
                    return <section className="product" key={`product--${product.id}`}>
                        <div><strong>{product.name}</strong> ({product.productType.typeName}) </div> <div>- ${product.price}</div>
                    </section>
                }
            )}

            {userObject.staff
                ?
                <>
                    <button id="button" onClick={() => navigate("/product/create")}>Add Product</button>
                </>
                :
                <>
                <button id="highBtn" onClick={() => updatePrice(true)}>Highest Priced</button>
                <button id="allBtn" onClick={() => updatePrice(false)}>Show All</button>
                </>
        }


        </article>
    </>

}