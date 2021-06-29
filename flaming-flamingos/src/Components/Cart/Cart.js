import {useContext } from 'react';
import {Link} from 'react-router-dom'
import { DataContext } from '../../App';

const Cart = () => {
    const cartData=useContext(DataContext);
    console.log({cartData});
    function total(){
        let totalPrice = 0;
        for(let i=0; i < cartData.cartItems.length; i++){
            totalPrice += cartData.cartItems[i].price;
        }
        return totalPrice;
    }
    const taxes = total() * .08875;
    let shipping;
    if (cartData.cartItems.length > 0){
        shipping = 5.99;
    }else{
        shipping = 0.00;
    }
    const grandTotal = taxes + shipping + total ();
    return (
        <div className="cart-container">
            <h2> Your Cart</h2>
            <div className="empty">
                {cartData.cartItems.length ===0 && <div>Cart is empty </div>}   
            </div>
            {cartData.cartItems.map((item, id)=>
            <div className="cart"key={id}>
                
                <img className="cart-images" src={item.image} width="65" alt=""/>
                <div className="cart-items">
                        <div className="remove"><button onClick={()=>cartData.removeProductToCart(id)}>Remove</button></div>
                        {/* <div>{item.title}</div> */}
                        <div>$ {item.price}</div>
                </div>
                <div>
                    {cartData.cartItems.length >= 0 && <div> </div>}
                </div>
            </div>)}
            <div>
                <p>Before taxes & shipping fees:  $ {total().toFixed(2)}</p>
                <p>Taxes:  $ {taxes.toFixed(2)}</p>
                <p>Shipping:   $ {shipping}</p>
                <p>Cumulative total: $  {grandTotal.toFixed(2)}</p>
            </div>
            <div>
                <Link to="/pay"><button className="pay">PAY  $ {grandTotal.toFixed(2)}</button></Link>
            </div>
        </div>
    );
};
export default Cart;