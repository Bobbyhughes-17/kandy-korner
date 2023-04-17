import { useState } from "react"

import { ProductSearch } from "./ProductSearch"
import { ProductsTwo } from "./productsTwo"

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
         <ProductSearch setterFunction={setSearchTerms} />
         <ProductsTwo searchTermState={searchTerms} />
    </>
    
}