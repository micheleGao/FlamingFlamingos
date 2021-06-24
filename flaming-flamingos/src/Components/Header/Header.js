import {Link} from 'react-router-dom';

function Header() {
  
    return (
      <div className="App">
        <nav>
          This is where all the links go
          <p><Link to="/">Home</Link></p>
          <p><Link to="/clothing">Clothing</Link></p>
          <p><Link to="/shoes">Shoes</Link></p>
          <p><Link to="/accessories">Accessories</Link></p>
          <p><Link to="/jewelry">Jewelry</Link></p>
          <p><Link to="/productslist">All Products</Link></p>
        </nav>
  
      </div>
    );
  }
  
  export default Header;