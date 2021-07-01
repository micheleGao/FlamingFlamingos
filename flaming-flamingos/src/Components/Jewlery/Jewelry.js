import { useContext } from 'react';
import { DataContext } from '../../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Jewelry({ items }) {

    const cartData = useContext(DataContext);
    if (items.length <= 0) {
        return <img src="https://i.ibb.co/d7xMG21/Cute-Ice-Cream-Birthday-Card.gif" alt="flamingo on fire" width="90"/>
    }

    const jewels = items.filter((item) => {
        return (
            (item.category === "jewelery")
        )
    })

    return (
        <div className="jewelery-list">

                {jewels && jewels.map((jewel, id) => {
                    return (
                        <Card  className="jewel" style={{ width: '13rem' }} border= "light" key ={id}>
                        <Card.Body>
                            <Card.Img variant="success" src={jewel.image} width="40"/>
                            <Card.Title>{jewel.title}</Card.Title>
                            <Card.Text> {jewel.price}</Card.Text>
                            <Button variant="light" className="btn btn-outline-dark" onClick={()=>cartData.addProductToCart(jewel)}>Add to cart</Button>
                        </Card.Body>
                        </Card>
                    )
                })}
           
        </div>
    );
}

export default Jewelry;