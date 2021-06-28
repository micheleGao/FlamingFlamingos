import { useState, useReducer, useContext } from 'react';
import Clothing from '../Clothing/Clothing';
import { DataContext } from '../../App';

const Cart = ({items, onAdd}) => {
const cartData=useContext(DataContext);
console.log({cartData});


    return (
        <div>
            <h2>Cart</h2>
            <div>
                {cartData.cartItems.length ===0 && <div>Cart is empty </div>}
            </div>
            {cartData.cartItems.map((item, id)=>
            <div className="cart"key={id}>
                <div>{item.title}</div>
                {/* <button onClick={()=>onAdd(item)} classname="add"> + </button> */}
                {/* <button onClick={()=>onRemove(item)} classname="remove">+</button> */}
                <div clasName="cart-items">
                    {item.price.toFixed(2)}
                </div>
                <div>
                    {cartData.cartItems.length >= 0 && <div> total: $ {item.price +=item.price}</div>}
                </div>
            </div>)}
        </div>
        
        // {item.price += item.price-1}
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