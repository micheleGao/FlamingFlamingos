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
            <p><Link to="/">Home</Link></p>
            <p><Link to="/clothing">Clothing</Link></p>
            <p><Link to="/Random">Have some random fun!</Link></p>
            {/* <h1><Link to="/Miscellaneous">Miscellaneous</Link></h1> */}
            <p><Link to="/jewelry">Jewelry</Link></p>
            <p><Link to="/productslist">All Products</Link></p>
            <p><Link to="/cart">
              <button>
                <img
                  width='30'
                  src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
                  alt='Shopping cart icon'
                />
              </button>
              </Link></p>
          </ul>
        </nav>
  
      </div>
    );
  }
  
  export default Header;