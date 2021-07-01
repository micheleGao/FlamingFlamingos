import {useContext} from 'react';
import {DataContext} from '../../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductsList({items}) {
  const cartData = useContext(DataContext);

 if (items.length ===0){
   return <img src="https://i.ibb.co/d7xMG21/Cute-Ice-Cream-Birthday-Card.gif" alt="flamingo on fire" width="90"/>
   
 }
    return (
      <div className="flexbox-container">
        <div className="clothing-list">
                {items && items.map((item, id)=>{
                    return(

                      <Card style={{ width: '13rem' }} key ={id} border="light" >
                      <Card.Body>
                      <Card.Img variant="top" src={item.image}/>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text> $ {item.price}</Card.Text>
                      </Card.Body>
                          <Button variant="light" className="btn btn-outline-dark" onClick={()=>cartData.addProductToCart(item)}>Add to cart</Button>
                      </Card>

                    )
                })}  
           </div>  
      </div>
    );
  }
  
  export default ProductsList;