import {useContext} from 'react';
import {DataContext} from '../../App';
function Jewelry({items, onAdd}) {
const cartData = useContext(DataContext);
console.log(cartData)

    if(items.length <= 0){
        return "loading...."
    } 
    const jewels = items.filter((item)=>{
        return(
          (item.category === "jewelery")
          
        )})
    
    return (
        <div className="jewelery-list">
            <div>
                {jewels && jewels.map((jewel, id) => {
                    return (
                        <div className="jewelery" key={id} >
                           <img src={jewel.image} alt="jewelery"/>
                           <p>{jewel.title}</p>
                           <p> $ {jewel.price}</p>
                           <p><button onClick={()=>cartData.addProductToCart(jewel)}>ADD TO CART</button></p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Jewelry;