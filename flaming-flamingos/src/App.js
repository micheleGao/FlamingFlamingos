// import './App.css';
import { useState, useEffect, useReducer, createContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import Clothing from './Components/Clothing/Clothing';
import Home from "./Components/Home/Home";
import Jewelry from './Components/Jewlery/Jewelry';
import ProductsList from './Components/ProductList/ProductList';
import Random from './Components/Random/Random';
import Cart from './Components/Cart/Cart';
import Electronics from './Components/Electronics/Electronics';
 import Pay from './Components/Cart/Pay';

export const DataContext = createContext();
console.log(DataContext);

function App() {
  //redirects
  const [redirect, setRedirect]=useState(false)
  //getters and setters for the api calls.
  const [items, setItems] = useState([])
  const [ricks, setRick] = useState([]);
  //calling api
  const getItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log("There appears to be an error", error );
    }
  };
  //hook
  useEffect(() => {
    getItems();
  }, [])

  useEffect(()=>{
    setRedirect(false);
  },[redirect])


  //useReducer to add functionality to the cart component.
  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        console.log(state)
        return [...state, action.value];
      case 'REMOVE':
        return [
          ...state.slice(0,action.value),
           ...state.slice(action.value + 1),
        ];
      default:
        return state;
    }
  }

  const [cartItems, dispatchCartItems] = useReducer(cartReducer, []);

  const addProductToCart = (index) => {
    dispatchCartItems({ type: 'ADD', value: index});
  }
  const removeProductToCart = (index) => {
    dispatchCartItems({ type: 'REMOVE', value: index});
  }

  return (
    <DataContext.Provider value={{cartItems, setItems, addProductToCart, removeProductToCart }}>
      <div className="App">
        <h1>Flaming Flamingos</h1>
        <nav className="Header-Component">
          <Header />
        </nav>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* // <Route path="/shoes" render={()=><Shoes Shoes={Shoes}/> */}
            <Route path="/clothing" render={() => <Clothing items={items} />} />
            <Route path="/productslist"  render={() => <ProductsList items={items} />} />
            <Route path="/jewelry" render={() => <Jewelry items={items} />} />
            <Route path="/electronics" render={() => <Electronics items={items} />} />
            <Route path="/random" render={() => <Random ricks={ricks} setRick={setRick}/>} />
            {/* <Route path="/productslist" component={ProductsList} items={items} /> */}
            <Route path='/cart' render={() =>
              <Cart
                cartItems={cartItems}
              />
            } />
            <Route path="/pay" render={()=> <Pay redirect={redirect}/>}/>
          </Switch>
        </main>
      </div>
     </DataContext.Provider> 
  );
}

export default App;
