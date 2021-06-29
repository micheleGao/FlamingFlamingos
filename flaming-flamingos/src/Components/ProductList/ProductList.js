import {useContext} from 'react';
import {DataContext} from '../../App';

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
                        <div className="clothes" key={id}>
                            <img src={item.image} alt="clothing"/>
                            <p className="add-button"><button onClick={()=>cartData.addProductToCart(item)}className="add-clothing" >ADD TO CART</button></p>
                            <p>$ {item.price}</p>
                            <p>{item.title}</p>  
                        </div>
                    )
                })}  
           </div>  
      </div>
    );
  }
  
  export default ProductsList;