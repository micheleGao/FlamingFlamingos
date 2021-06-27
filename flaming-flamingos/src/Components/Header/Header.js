import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="header">
      <h1>STYLE, SQUAWK, SMILE!</h1>
      <img className="flamingo=logo"src="https://i.ibb.co/s1bWhfx/flaming-FLAMINGOS-Logo.jpg" alt="flaming-FLAMINGOS-Logo" />
      <nav className="nav">
        This is where all the links go
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clothing">Clothing</Link></li>
          <li><Link to="/Random">Have some random fun!</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/jewelry">Jewelry</Link></li>
          <li><Link to="/productslist">All Products</Link></li>
          <li>
            <Link to="/cart">
              <button>
                <img
                  width='30'
                  src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
                  alt='Shopping cart icon'
                />
              </button>
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default Header;