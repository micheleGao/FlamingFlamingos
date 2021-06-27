import { useState, useReducer } from 'react';
import Clothing from '../Clothing/Clothing';

const Cart = ({items, onAdd}) => {

const [cartItems, setCartItems] = useState([]);
    // const cartReducer = (state, action) => {
    //     switch (action.type) {
    //         case 'ADD':
    //             return [...state, action.value];
    //         case 'REMOVE':
    //             return [
    //                 ...state.slice(0, action.value),
    //                 ...state.slice(action.value + 1),
    //             ];
    //         default:
    //             return state;
    //     }
    // }

    // const [cartItems, dispatchCartItems] = useReducer(cartReducer, []);

    // const addProductToCart = (index) => {
    //     dispatchCartItems({ type: 'ADD', value: items[index] });
    // }
    // const removeProductToCart = (index) => {
    //     dispatchCartItems({ type: 'REMOVE', value: index });
    // }

    // function handleClick() {
    //     console.log('ADDED TO CART');
    // }
    return (
        <div>
            <h2>Cart</h2>
            <div>
                
                {cartItems.length ===0 && <div>Cart is empty </div>}
            </div>
            {cartItems.map((item, id)=>
            <div className="cart"key={id}>
                <div>{item.title}</div>
                <div>{item.price}</div>
                <button onClick={()=>onAdd(item)} classname="add">+</button>
                {/* <button onClick={()=>onRemove(item)} classname="remove">+</button> */}
                <div clasName="cart-items">
                    {item.qty} x {item.price.toFixed(2)}
                </div>
            </div>)}
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