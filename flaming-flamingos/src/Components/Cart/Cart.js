import { useReducer} from 'react';


import Clothing from '../Clothing/Clothing';

const Cart = ({items}) => {
    const cartReducer = (state, action) => {
        switch (action.type) {
          case 'ADD':
            return [...state, action.value];
          case 'REMOVE':
            return [
              ...state.slice(0, action.value),
              ...state.slice(action.value + 1),
            ];
          default:
            return state;
        }
      }

    const [cartItems, dispatchCartItems] = useReducer(cartReducer, []);

    const addProductToCart = (index) => {
        dispatchCartItems({ type: 'ADD', value: items[index] });
      }
      const removeProductToCart = (index) => {
        dispatchCartItems({ type: 'REMOVE', value: index });
      }
    return (
        <div className>
            <div className='cart-header'>
                <h4>Your Cart</h4>
                {/* <button className='open'>open</button>
                <button className='close'>Close</button> */}
            </div>
            {
                cartItems.map((item, i) => (
                    <Clothing
                        addProductToCart={addProductToCart}
                        action={'add'}
                        key={i}
                        index={i}
                        product={item}
                        removeProductToCart={removeProductToCart}
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
//={`cart ${cartOpen === true ? 'open' : 'closed'}`}