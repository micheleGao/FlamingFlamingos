import { useState, useEffect } from 'react';
function Jewelry() {
    const [jewelry, setJewelry] = useState([])
    const getJewelry = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
            const data = await response.json();
            setJewelry(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getJewelry();
    }, [])

    return (
        <div className="App">
            <div>
                {jewelry.map((jewels, id) => {
                    return (
                        <div className="jewelry" key={id} >
                           <h1>{jewels.title}</h1>
                           <img src={jewels.image}/>
                           <h2>{jewels.price}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Jewelry;