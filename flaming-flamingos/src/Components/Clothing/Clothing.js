// import ProductsList from '../ProductsList/ProductsList';
import { useState, useEffect } from 'react';
function Clothing({ items }) {
  console.log(items)
  if (items.length <= 0) {
    return "loading..."
  }
  //if clothing is equal to category. create a div with the following images, price. and title
  const apparels = items.filter((item)=>{
    return(
      (item.category === "men's clothing") ||(item.category === "women's clothing")
    )}
  )
  console.log(apparels);

  return (
    <div className="flexbox-container">
    <h1>This is the clothing</h1>
          <div className="clothing-list">
                {apparels && apparels.map((apparel, id)=>{
                    return(
                        <div className="clothes" key={id}>
                            <img src={apparel.image}/>
                            <h1>{apparel.price}</h1>
                            <h3>{apparel.title}</h3>
                            <h4>{apparel.category}</h4>
                            <button className="add-clothing">ADD</button>
                        </div>
                    )}
                )}  
           </div>  
      </div>
    );
  }
  export default Clothing;
