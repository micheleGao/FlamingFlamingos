// import ProductsList from '../ProductsList/ProductsList';
import { useContext } from 'react';
import {DataContext} from '../../App';


function Clothing({items, onAdd}) {
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
                        <div className="clothes" key={id}>
                            <img src={apparel.image} alt=""/>
                            <p className="add-button"><button onClick={()=>cartData.addProductToCart(apparel)} className="add-clothing">ADD TO CART</button></p>
                            <p>$ {apparel.price}</p>
                            <p>{apparel.title}</p>
                            {/* <h4>{apparel.category}</h4> */}
                            
                        </div>
                    )}
                )}  
           </div>  
      </div>
    );
  }
  export default Clothing;
