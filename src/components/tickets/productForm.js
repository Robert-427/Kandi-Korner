import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [product, update] = useState({
        name: "",
        typeId: "",
        price: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        /*
        {
            "userId": 1,
            "name": "Gummy Worms",
            "typeId": 3,
            "price": 1.5
        }
        */
        const productToSendToAPI = {
            name: product.name,
            typeId: product.typeId,
            price: product.price
        }

        // TODO: Perform the fetch() to POST the object to the API
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
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Candy name here"
                        value={product.name}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="typeId">Type of candy:</label>
                    <input
                        required autoFocus
                        input type="radio"
                        value={product.type}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.type = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="price">Price of candy:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Candy price here"
                        value={product.price}
                        onChange={
                            (evt) => {
                                const copy = {...product}
                                copy.name = evt.target.value
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

/*
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        value={ticket.emergency}
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
*/