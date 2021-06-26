import { useState, useReducer } from "react";

const dispatchReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return (state += 1);
        case 'SUBTRACT':
            return (state -= 1);
        default:
            return state;
    }
};


function ProductCard({ items, addToCart, index, action,  }) {
    const [quantity, dispatch] = useReducer(dispatchReducer, 0);
    const apparels = items.filter((item)=>{
        return(
          (item.category === "men's clothing") ||(item.category === "women's clothing")
        )}
      )
      console.log(apparels);
    return (
        <li className='card'>
            <div className='description'>
                {apparels && apparels.map((apparel, id)=>{
                    if(addToCart){
                        console.log('added from cart')
                    }
                    return(
                        <div className="cart-items" key={id}>
                        <h2>{apparel.price}</h2>
                        <img src={apparel.image} alt=""/>
                        <button> + </button>
                        </div>
                    )
                })}
            </div>
            <div className='quantity'>
                <button
                    className='quantity-increase'
                    onClick={() => dispatch({ type: 'ADD' })}>
                    +
                </button>
                Quantity: {quantity}
                <button
                    className='quantity-decrease'
                    onClick={() => dispatch({ type: 'SUBTRACT' })}>
                    -
                </button>
            </div>
            {
                addToCart && (
                    <>
                        <button className='btn btn-primary' onClick={() => addToCart(index)}>
                            {action ? 'Remove from Cart' : 'Add To Cart'}
                        </button>
                    </>
                )
}
        </li>
    )
}
export default ProductCard;