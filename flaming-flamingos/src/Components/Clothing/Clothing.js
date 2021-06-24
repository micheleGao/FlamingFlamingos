// import ProductsList from '../ProductsList/ProductsList';
import { useState, useEffect } from 'react';
function Clothing({items}) {
  // const [unity, setUnity] = useState([])
  // const getUnity = async () => {
  //   try {
  //     const response = await fetch('https://rickandmortyapi.com/api/character/372');
  //     const data = await response.json();
  //     setUnity(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getUnity();
  // }, [])
  console.log(items)
if(items.length<=0){
  return "loading..."
}
  return (
    <div>
      <h1>This is the clothing page</h1>
      <div className="clothes">
        <div className="Clothing">
              <div className="clothes">
                <img src={items[1].image} />
                <h1>{items[1].price}</h1>
                <h3>{items[3].title}</h3>
                <h4>{items[4].category}</h4>
              </div>
        </div>
        {/* <div>
          <img src={unity.image} />
          <h1>{unity.status}</h1>
          <h3>{unity.name}</h3>
        </div>
      </div> */}
      </div>
    </div>
  );
}
export default Clothing;