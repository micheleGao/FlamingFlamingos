import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import BodyImage from './Components/BodyImage/BodyImage';
import Clothing from './Components/Clothing/Clothing';
import Home from "./Components/Home/Home";
import Jewelry from './Components/Jewlery/Jewelry';
import ProductsList from './Components/ProductsList/ProductsList';



function App() {
  const [items, setItems] = useState([])
  console.log(items);
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
    <div className="App">
      <h1>
        FLAMING Flamingos!
      </h1>
      <Header />
      <BodyImage />
      <main>
        <Switch>
        <Route path="/" exact component={Home}/>
          {/* <Route path="/" exact component={BodyImage}/> */}
          {/* // <Route path="/shoes" render={()=><Shoes Shoes={Shoes}/> */}
          {/* <Route path="/clothing" component={Clothing} items={items} /> */}
          <Route path="/clothing" exact render={() => <Clothing items={items}/> } />
          <Route path="/productslist" exact render={() => <ProductsList items={items}/> } />
          <Route path="/jewelry"  component={Jewelry}/>
          {/* <Route path="/productslist" component={ProductsList} items={items} /> */}
          
        </Switch>
      </main>

    </div>
  );
}

export default App;
