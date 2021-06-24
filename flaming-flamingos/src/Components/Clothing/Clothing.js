import {useState, useEffect} from 'react';

function Clothing() {
    const [items, setItems] = useState([])
    const getItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getItems();
    }, [])
    return (
      <div className="clothes">
        <h1>
          This is the clothing page
        </h1>
        <div className="Clothing">
                {items && items.map((item, id)=>{
                    console.log(item)
                    return(
                        <div className="clothes" key={id}>
                            <img src={item.image}/>
                            <h1>{item.price}</h1>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}  
           </div>  
      </div>
    );
  }
  
  export default Clothing;