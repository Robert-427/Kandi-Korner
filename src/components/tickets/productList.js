import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./product.css"

export const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [expensive, setExpensive] = useState(false)
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    useEffect(
        () => {
            if (expensive) {
                const expensiveProducts = products.filter(product => product.price > 2)
                setFilteredProducts(expensiveProducts)
            } else {
                setFilteredProducts(products)
            }
        },
        [expensive]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=type&_sort=name`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        [] // When this array is empty, you are observing initial component state
    )

    useEffect(
        () => {
            if (kandyUserObject.staff) {
                //for employees
                setFilteredProducts(products)
            } else {
                //for customers
                setFilteredProducts(products)
            }
        },
        [products]
    )

    return <>
        {
            kandyUserObject.staff
                ? <>
                    <button onClick={() => { setExpensive(true) }}>Top Priced</button>
                    <button onClick={() => { setExpensive(false) }}>Show All</button>
                </>
                : ""
        }
        <h2>List of Products</h2>

        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="product" key={`product--${product.id}`}>
                            <header>Candy: {product.name}</header>
                            <footer>Price per Unit: ${Number(product.price).toFixed(2)}</footer>
                            <footer>Product Type: {product.type.candy}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}
