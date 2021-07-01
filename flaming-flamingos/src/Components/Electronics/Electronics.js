import {useContext} from 'react';
import { DataContext } from "../../App"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Electronics({ items}) {
    //storing a variable for the imported context data
    const cartData =useContext(DataContext)
    if (items.length <= 0) {
        return <img src="https://i.ibb.co/d7xMG21/Cute-Ice-Cream-Birthday-Card.gif" alt="flamingo on fire" width="90"/>
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
                        <Card style={{ width: '15rem' }} key ={id} border="light">
                        <Card.Img variant="top" src={electronic.image} />
                        <Card.Body>
                            <Card.Title>{electronic.title}</Card.Title>
                            <Card.Text> $ {electronic.price}</Card.Text>
                        </Card.Body>
                        <Button variant="light" className="btn btn-outline-dark" onClick={()=>cartData.addProductToCart(electronic)}>Add to cart</Button>
                        </Card>

                    )
                }
                )}
            </div>
        </div>
    )
}