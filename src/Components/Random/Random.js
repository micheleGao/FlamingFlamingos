import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';

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
                      <Card style={{ width: '10rem' }} key ={id}>
                        <Card.Img variant="top" src={rick.image} />
                        <Card.Body>
                            <Card.Title>{rick.name}</Card.Title>   
                        </Card.Body>
                        </Card>
                        
                    )}
                )}  
           </div>   
      </div>
    );
  }
  
  export default Random;