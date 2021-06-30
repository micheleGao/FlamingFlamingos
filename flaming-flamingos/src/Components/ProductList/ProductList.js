import {useContext} from 'react';
import {DataContext} from '../../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductsList({items}) {
  const cartData = useContext(DataContext);
 if (items.length ===0){
   return "Loading...."
 }
    return (
      <div className="flexbox-container">
        <div className="clothing-list">
                {items && items.map((item, id)=>{
                    return(
                      <Card style={{ width: '17rem' }} key ={id} >
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text> {item.price}
                          </Card.Text>
                          <Button variant="primary" className="btn btn-outline-dark" onClick={()=>cartData.addProductToCart(item)}>Add to cart</Button>
                      </Card.Body>
                      </Card>

                        // <div className="clothes" key={id}>
                        //     <img src={item.image} alt="clothing"/>
                        //     <button type="button" className="btn btn-outline-dark" button onClick={()=>cartData.addProductToCart(item)}>Add to Cart</button>
                        //     {/* <p className="add-button"><button onClick={()=>cartData.addProductToCart(item)}className="add-clothing" >ADD TO CART</button></p> */}
                        //     <p>$ {item.price}</p>
                        //     <p>{item.title}</p>  
                        // </div>
                    )
                })}  
           </div>  
      </div>
    );
  }
  
  export default ProductsList;