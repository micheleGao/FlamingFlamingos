import {useState, useEffect} from 'react';
function ProductsList({items}) {
    return (
      <div className="clothing-list">
        <h1>This is the Products Listed</h1>
        <div className="Clothing">
                {items && items.map((item, id)=>{
                    console.log(item)
                    return(
                        <div className="clothes" key={id}>
                            <img src={item.image}/>
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