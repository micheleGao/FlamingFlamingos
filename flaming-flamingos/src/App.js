
import './App.css';
import { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import BodyImage from './Components/BodyImage/BodyImage';
import Clothing from './Components/Clothing/Clothing';
import Home from "./Components/Home/Home";
import Jewelry from './Components/Jewlery/Jewelry';


function App() {

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
          <Route path="/clothing" exact component={Clothing}/>
          <Route path="/jewelry"  component={Jewelry}/>
        
        </Switch>
      </main>

    </div>
  );
}

export default App;
