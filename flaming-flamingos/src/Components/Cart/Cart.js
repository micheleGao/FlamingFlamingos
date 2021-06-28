import { useState, useReducer, useContext } from 'react';
import {Link} from 'react-router-dom'
import Clothing from '../Clothing/Clothing';
import { DataContext } from '../../App';

const Cart = () => {
    const cartData=useContext(DataContext);
    console.log({cartData});

    function total(){
        let totalPrice = 0;
        for(let i=0; i < cartData.cartItems.length; i++){
            console.log('hello')
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
        <div>
            <h2>Cart</h2>
            <div>
                {cartData.cartItems.length ===0 && <div>Cart is empty </div>}
                
            </div>
            {cartData.cartItems.map((item, id)=>
            <div className="cart"key={id}>
                <div>{item.title}</div>
                <img className="cart-images" src={item.image} width="30" alt=""/>
                {/* <button onClick={()=>onAdd(item)} classname="add"> + </button> */}
                {/* <button onClick={()=>onRemove(item)} classname="remove">+</button> */}
                <div className="cart-items">
                    {/* {cartData.cartItems === item} */}
                        <div className="remove"><button onClick={()=>cartData.removeProductToCart(id)}>Remove</button></div>
                    $ {item.price}
                </div>
                <div>
                    {/* {total = [cartData.cartItems].reduce((a, b) => a + b, 0)} */}
                    {cartData.cartItems.length >= 0 && <div> </div>}
                </div>
            </div>)}
            <div>
                <p>before taxes & fees:  $ {total().toFixed(2)}</p>
                <p>taxes:  $ {taxes.toFixed(2)}</p>
                <p>shipping:   $ {shipping}</p>
                <p>cumulative total: $  {grandTotal.toFixed(2)}</p>
            </div>
            <div>
                <Link to="/pay"><button className="pay">PAY  $ {grandTotal.toFixed(2)}</button></Link>
            </div>
        </div>
        

        // <div className>
        //     <div className='cart-header'>
        //         <h4>Your Cart</h4>
        //         {/* <button className='open'>open</button>
        //         <button className='close'>Close</button> */}
        //     </div>
        //     {
        //         cartItems.map((item, i) => (
        //             <Clothing/>
        //         ))
        //     }
        // </div>
    );
};

export default Cart;
//={`cart ${cartOpen === true ? 'open' : 'closed'}`}