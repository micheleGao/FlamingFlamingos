import {useContext} from 'react';
import { DataContext } from "../../App"
export default function Electronics({ items}) {
    //storing a variable for the imported context data
    const cartData =useContext(DataContext)
    if (items.length <= 0) {
        return "loading..."
    }
    //if clothing is equal to category. create a div with the following images, price. and title
    const electronics = items.filter((item) => {
        return (
            (item.category === "electronics") 
        )
    }
    )
    console.log(electronics);

    return (
        <div className="flexbox-container">
            <h2> Electronics</h2>
            <div className="electronic-list">
                {electronics && electronics.map((electronic, id) => {
                    return (
                        <div className="electronics" key={id}>
                            <img src={electronic.image} alt="" />
                            {/* <p className="add-button"><button onClick={()=>cartData.addProductToCart(electronic)}className="add-clothing">ADD TO CART</button></p> */}
                            <button type="button" className="btn btn-outline-dark" button onClick={()=>cartData.addProductToCart(electronic)}>Add to Cart</button>
                            <p> $ {electronic.price}</p>
                            <p>{electronic.title}</p>
                            {/* <h4>{apparel.category}</h4> */}

                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}