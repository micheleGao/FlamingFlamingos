import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className="header">
      <nav className="nav">
        <ul>
        <img className="flamingo-logo"src="https://i.ibb.co/s1bWhfx/flaming-FLAMINGOS-Logo.jpg" alt="flaming-FLAMINGOS-Logo"  width="80"/>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/clothing">Clothing</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/jewelry">Jewelry</Link></li>
          <li><Link to="/productslist">All Products</Link></li>
          <li><Link to="/Random">Fun</Link></li>
          <li>
            <Link to="/cart">
              <button>
                <img
                  // width='15'
                  // src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
                  width='50'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc56P5pW9BdCRU-_YRrYPn9IBiNye0fxuSA&usqp=CAU'
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