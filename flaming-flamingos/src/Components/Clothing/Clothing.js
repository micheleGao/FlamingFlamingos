// import ProductsList from '../ProductsList/ProductsList';
import { useContext } from 'react';
import {DataContext} from '../../App';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Clothing({items}) {
  const cartData = useContext(DataContext);
  console.log(cartData)

  if (items.length <= 0) {
    return "loading..."
  }
  //if clothing is equal to category. create a div with the following images, price. and title
  const apparels = items.filter((item)=>{
    return(
      (item.category === "men's clothing") ||(item.category === "women's clothing")
    )}
  )
  // console.log(apparels);

  // function handleClick(){
  //   console.log('button from clothing page');
  // }


  return (
    <div className="flexbox-container">
    <h1>This is the clothing</h1>
          <div className="clothing-list">
                {apparels && apparels.map((apparel, id)=>{
                    return(
                      // <Card style={{ width: '17rem' }} key ={id} >
                      // <Card.Img variant="top" src={apparel.image} />
                      // <Card.Body>
                      //     <Card.Title>{apparel.title}</Card.Title>
                      //     <Card.Text> {apparel.price}
                      //     </Card.Text>
                      //     <Button variant="primary" className="btn btn-outline-dark" onClick={()=>cartData.addProductToCart(apparel)}>Add to cart</Button>
                      // </Card.Body>
                      // </Card>

                        <div className="clothes" key={id}>
                            <img src={apparel.image} alt=""/>
                            <button type="button" className="btn btn-outline-dark" button onClick={()=>cartData.addProductToCart(apparel)}>Add to Cart</button>
                            {/* <p className="add-button"><button onClick={()=>cartData.addProductToCart(apparel)} className="add-clothing">ADD TO CART</button></p> */}
                            <p>$ {apparel.price}</p>
                            <p>{apparel.title}</p>
                            {/* <h4>{apparel.category}</h4>  */}
                            
                        </div>
                    )}
                )}  
           </div>  
      </div>
    );
  }
  export default Clothing;
