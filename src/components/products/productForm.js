import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {

    const [productTypes, setProductTypes] = useState([])

    useEffect(
        () => {fetch(`http://localhost:8088/productTypes`)
            .then(response => response.json())
            .then((typesArray) => 
            {setProductTypes(typesArray)})
    },
    []
    )

const [product, update] = useState({
    name: "",
    price: "",
    productTypeId: ""

})

const navigate = useNavigate()

const handleSaveButtonClick = (event) => {
    event.preventDefault()

    const productToSendToAPI = {
        name: product.name,
        price: product.price,
        productTypeId: product.productTypeId
    }

    return fetch(`http://localhost:8088/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productToSendToAPI)
    })
    .then(response => response.json())
    .then(() => {
        navigate("/products")
    })
}

return (
    <form className="productForm">
        <h2 className="productForm__title">New Product</h2>
        <fieldSet>
            <div className="product-group">
                <label htmlFor="name">Name:</label>
                <input
                required autoFocus
                type="text"
                className="form-control"
                placeholder="Name of Product"
                value={product.name}
                onChange={
                    (evt) => {
                        const copy = {...product}
                        copy.name = evt.target.value
                        update(copy)
                    }
                } />
            </div>
        </fieldSet>
        <fieldset>
            <div className="form-group">
                <label htmlFor="price">Price:</label>
                <input
                required autoFocus
                type="text"
                class="form-control"
                placeholder="Price of Product"
                value={product.price}
                onChange={
                    (evt) => {
                        const copy = {...product}
                        copy.price = evt.target.value
                        update(copy)
                    }
                } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="types">Type:</label>
                    <select className="form-control" id="types" name="types" onChange={(evt) => {
                        const copy = {...product}
                        copy.productTypeId = evt.target.value
                        update(copy)
                    }}>

                        {productTypes.map((type) => {
                            return <option value={`${type.id}`}>{type.typeName}</option>
                        })}
                    </select>
            </div>
        </fieldset>
        <button id="button"
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary">
            Submit Product
        </button>
    </form>

)


}