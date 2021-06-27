import {useState, useEffect, useReducer} from 'react';
function ProductsList({items}) {
  function handleClick(){
    console.log('button from all products page');
  }
    return (
      <div className="flexbox-container">
        <h1>This is the Products Listed</h1>
        <div className="clothing-list">
                {items && items.map((item, id)=>{
                    // console.log(item)
                    return(
                        <div className="clothes" key={id}>
                            <img src={item.image} alt="clothing"/>
                            <p className="add-button"><button className="add-clothing" onClick={handleClick}>ADD</button></p>
                            <h1>{item.price}</h1>
                            <h3>{item.title}</h3>
                            <h4>{item.category}</h4>
                            
                        </div>
                    )
                })}  
           </div>  
      </div>
    );
  }
  
  export default ProductsList;