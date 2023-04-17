import { useEffect, useState } from "react";
import { Product } from "./product"; 
import "./products.css"

export const ProductsTwo = ({ searchTermState }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [chosenProduct, setChosenProduct] = useState({})

    useEffect(
        () => {
            const searchedProducts = products.filter(product => {
                return product.name.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchedProducts)
        }, [searchTermState]
    )

    useEffect(
        () => {fetch('http://localhost:8088/products?_sort=name&_order=asc')
            .then(response => response.json())
            .then((data) => {
                setProducts(data)
            })
        },
        [] 
    )

    return <>
    {
   searchTermState ? <>
    <h2>Matching products</h2>
    <article className="products">

    {filteredProducts.map(
            (product) => {
                return  (<Product key={`Product--${product.id}
                `}
                id={product.id} 
                name={product.name} 
                price={product.price} />)
            }
    )}

    </article>
    </> : <></>
}
</>
}
  
