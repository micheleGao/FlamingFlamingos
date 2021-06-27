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

  // const RickMorty = JSON.parse(ricks)

  if (ricks.length <= 0) {
    return "loading..."
  }
    return (
      <div className="flexbox-container">
        <h1>What is going here?</h1>
        <div className="rick-list">
                {ricks && ricks.map((rick, id)=>{
                    return(
                        <div className="rick" key={id}>
                          <h1>Just a litle fun!</h1>
                           <img src={rick.image} alt="Random Rick"/>
                        </div>
                    )}
                )}  
           </div>   
      </div>
    );
  }
  
  export default Random;