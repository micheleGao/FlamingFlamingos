import {useState, useEffect} from 'react';

function Random() {
  
  const [ricks, setRick] = useState([])

  const getRick = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setRick(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRick();
  }, [])

    return (
      <div className="Random">
        <h1>What is going here?</h1>
        <div className="rick-morty">
                {/* {ricks && ricks.map((rick, id)=>{
                    return(
                        <div className="rick-morty" key={id}>
                            <img src={rick.results.image}/>
                        </div>
                    )}
                )}   */}
           </div>  
      </div>
    );
  }
  
  export default Random;