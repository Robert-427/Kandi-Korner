import { useState } from "react";
import { ProductsList } from "./ProductList";
import { ProductSearch } from "./productSearch";

export const ProductContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <ProductSearch setterFunction={setSearchTerms} />
        <ProductsList searchTermState={searchTerms} />
    </>
}