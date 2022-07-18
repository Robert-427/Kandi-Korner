import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    const [types, setTypes] = useState([])
    const navigate = useNavigate()

    const [product, update] = useState({
        name: "",
        typeId: "",
        price: ""
    })

    useEffect(
        () => {
            fetch(`http://localhost:8088/types`)
                .then(response => response.json())
                .then((typeArray) => {
                    setTypes(typeArray)
                })
        },
        []
    )

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const productToSendToAPI = {
            name: product.name,
            typeId: product.typeId,
            price: product.price
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of new candy:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Candy name here"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="typeId">Type of candy:</label>
                    {types.map(
                        (type) => {
                            return (
                                <div className="column" key={type.id}>
                                    <input type="radio" className="product_type" name="product_type" value={type.id}
                                        onChange={
                                            (evt) => {
                                                const copy = { ...product }
                                                copy.typeId = parseInt(evt.target.value)
                                                update(copy)
                                            }
                                        } />
                                    <label>{type.candy}</label>
                                </div>)
                        }
                    )
                    }
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price of candy:</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Candy price here"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = { ...product }
                                copy.price = parseFloat(evt.target.value)
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn btn-primary">
                Submit Product
            </button>
        </form>
    )
}
