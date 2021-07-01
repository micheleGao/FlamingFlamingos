// import ProductsList from '../ProductsList/ProductsList';
import { useContext } from 'react';
import {DataContext} from '../../App';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Clothing({items}) {
  const cartData = useContext(DataContext);

  if (items.length <= 0) {
    return <img src="https://i.ibb.co/d7xMG21/Cute-Ice-Cream-Birthday-Card.gif" alt="flamingo on fire" width="90"/>
  }
  //if clothing is equal to category. create a div with the following images, price. and title
  const apparels = items.filter((item)=>{
    return(
      (item.category === "men's clothing") ||(item.category === "women's clothing")
    )}
  )

  return (
    <div className="flexbox-container">
          <div className="clothing-list">
                {apparels && apparels.map((apparel, id)=>{
                    return(
                      <Card style={{ width: '13rem' }} key ={id}  border="light">
                      <Card.Img variant="top" src={apparel.image} width="30"/>
                      <Card.Body>
                          <Card.Text >{apparel.title}</Card.Text>
                          <Card.Text> {apparel.price}</Card.Text>
                      </Card.Body>
                      <Button variant="light" className="btn btn-outline-dark"  onClick={()=>cartData.addProductToCart(apparel)}> Add to cart</Button>
                      </Card>
                      // onClick={()=>cartData.addProductToCart(apparel)}
                    )}
                )}  
           </div>  
      </div>
    );
  }
  export default Clothing;
