import {Link} from 'react-router-dom';

function Header() {
  
    return (
      <div className="header">
        <h1>Flaming flaming hot!</h1>
        <p>Welcome!</p>
        <img src="https://i.ibb.co/s1bWhfx/flaming-FLAMINGOS-Logo.jpg" alt="flaming-FLAMINGOS-Logo"/>
        <img src="https://i0.wp.com/www.pinkflamingoawnings.com/wp-content/uploads/2018/01/buy-now.png?w=1080"alt="contact-us"/>
        <nav className="nav">
          This is where all the links go
            <ul>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart
              <button>
                <img
                  width='30'
                  src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
                  alt='Shopping cart icon'
                />
              </button>
              </Link>
            <Link to="/clothing">Clothing</Link>
            <Link to="/Random">Have some random fun!</Link>
            {/* <h1><Link to="/Miscellaneous">Miscellaneous</Link></h1> */}
            <Link to="/jewelry">Jewelry</Link>
            <Link to="/productslist">All Products</Link>
          </ul>
        </nav>
  
      </div>
    );
  }
  
  export default Header;