import {useState, useEffect} from 'react';

function Random() {
  const [ricks, setRick] = useState([])

  const getRick = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setRick(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRick();
  }, [])

  if (ricks.length <= 0) {
    return "loading..."
  }
    return (
      <div className="flexbox-container">
        <h1>Here's a collection of Ricky & Morty episode photos!</h1>
        <div className="rick-list">
                {ricks && ricks.map((rick, id)=>{
                    return(
                        <div className="rick" key={id}>
                          <p>{rick.name}</p>
                           <img src={rick.image} alt="Random Rick"/>
                        </div>
                    )}
                )}  
           </div>   
      </div>
    );
  }
  
  export default Random;