import './App.css';
import { useState, useEffect, useReducer} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import BodyImage from './Components/BodyImage/BodyImage';
import Clothing from './Components/Clothing/Clothing';
import Home from "./Components/Home/Home";
import Jewelry from './Components/Jewlery/Jewelry';
import ProductsList from './Components/ProductsList/ProductsList';
import Music from './Components/Music/Music';
import Random from './Components/Random/Random';
import Cart from './Components/Cart/Cart';
import ProductCard from './Components/Cart/ProductCard';

function App() {
  const [items, setItems] = useState([])
  const [ricks, setRick]=useState([]);
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

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [...state, action.value];
      case 'REMOVE':
        return [
          ...state.slice(0, action.value),
          ...state.slice(action.value + 1),
        ];
      default:
        return state;
    }
  }
  
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, updateCartItems] = useReducer(cartReducer, []);

  const addProductToCart = (index) => {
    updateCartItems({ type: 'ADD', value: items[index] });
    setCartOpen(true);
  }
  const removeProductToCart = (index) => {
    updateCartItems({ type: 'REMOVE', value: index });
  }

  return (
    <div className="App">
      <h1>
        FLAMING Flamingos!
      </h1>
      <nav>
      <Header />
      <Music/>
      </nav>
      <main>
        <Switch>
        <Route path="/" exact component={Home}/>
          {/* <Route path="/" exact component={BodyImage}/> */}
          {/* // <Route path="/shoes" render={()=><Shoes Shoes={Shoes}/> */}
          <Route path="/random" render ={()=><Random ricks={ricks} />}/>
          <Route path="/clothing" exact render={() => <Clothing items={items}/> } />
          <Route path="/productslist" exact render={() => <ProductsList items={items}/> } />
          <Route path="/jewelry"  exact render={()=> <Jewelry items={items}/>}/>
          {/* <Route path="/productslist" component={ProductsList} items={items} /> */}
          <Route path='/cart' exact render={()=>
                <Cart 
                  addProductToCart={addProductToCart}
                  removeProductToCart={removeProductToCart}
                  cartItems={cartItems}
                  cartOpen={cartOpen} 
                  setCartOpen={setCartOpen} 
              />
          }/>
          <ul>
          {
            items.length > 0 ? (
              items.map((item, i) => (
                <ProductCard
                  key={i}
                  index={i}
                  addToCart={addProductToCart}
                  product={item}
                />
              ))
            ) : (
              <div>Loading...</div>
            )
          }
        </ul>
        </Switch>

      </main>

    </div>
  );
}

export default App;
