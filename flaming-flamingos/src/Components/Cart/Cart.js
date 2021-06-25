import { useReducer } from 'react';


import ProductCard from './ProductCard';

const Cart = ({ cartOpen, setCartOpen, cartItems, removeProductFromCart }) => {
    return (
        <div className={`cart ${cartOpen === true ? 'open' : 'closed'}`}>
            <div className='cart-header'>
                <h4>Your Cart</h4>
                <button className='open' onClick={() => setCartOpen(true)}>open</button>
                <button className='close' onClick={() => setCartOpen(false)}>
                    Close
                </button>
            </div>
            {
                cartItems.map((item, i) => (
                    <ProductCard
                        addToCart={removeProductFromCart}
                        action={'remove'}
                        key={i}
                        index={i}
                        product={item}
                    />
                ))
            }
        </div>
    );
};

export default Cart;