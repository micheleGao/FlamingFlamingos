import { useContext } from 'react';
import { DataContext } from '../../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Jewelry({ items }) {
    const cartData = useContext(DataContext);
    if (items.length <= 0) {
        return "loading...."
    }
    const jewels = items.filter((item) => {
        return (
            (item.category === "jewelery")

        )
    })

    return (
        <div className="jewelery-list">
            <div>
                {jewels && jewels.map((jewel, id) => {
                    return (
                        <Card style={{ width: '10rem' }} key ={id}>
                        <Card.Img variant="top" src={jewel.image} />
                        <Card.Body>
                            <Card.Title>{jewel.title}</Card.Title>
                            <Card.Text> {jewel.price}</Card.Text>
                            <Button variant="primary" className="btn btn-outline-dark" onClick={()=>cartData.addProductToCart(jewel)}>Add to cart</Button>
                        </Card.Body>
                        </Card>
                            //without bootstrap
                        // <div className="jewelery" key={id} >
                        //    <img src={jewel.image} alt="jewelery"/>
                        //    <p>{jewel.title}</p>
                        //    <p> $ {jewel.price}</p>
                        //    <button type="button" className="btn btn-outline-dark" button onClick={()=>cartData.addProductToCart(jewel)}>Add to Cart</button>
                        //    {/* <p><button onClick={()=>cartData.addProductToCart(jewel)}>ADD TO CART</button></p> */}
                        // </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Jewelry;