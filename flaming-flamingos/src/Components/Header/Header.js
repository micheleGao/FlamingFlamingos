import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header() {

  return (
    <div className="header">
      <nav className="nav">
        <Navbar bg="light" sticky="top" expand="sm">
          <Navbar.Brand href="/"><img src="https://i.ibb.co/s1bWhfx/flaming-FLAMINGOS-Logo.jpg" alt="flaming-FLAMINGOS-Logo"  width="30px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/random">Fun Zone</Nav.Link>
              <Nav.Link href="/cart">
                <button> 
              <img
                  width='30'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc56P5pW9BdCRU-_YRrYPn9IBiNye0fxuSA&usqp=CAU'
                  alt='Shopping cart icon'
                />
              </button>
              </Nav.Link>
              <NavDropdown title="Choose your path" id="basic-nav-dropdown">
                <NavDropdown.Item href="/clothing">Clothing</NavDropdown.Item>
                <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="jewelry">Jewelry</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="productslist"> All Items </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
           
      </nav>

    </div>
  );
}

export default Header;