import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className="header">
      <nav className="nav">
        <Navbar bg="light" sticky="top" expand="sm">
          <Navbar.Brand as={Link} to="/"><img src="https://i.ibb.co/s1bWhfx/flaming-FLAMINGOS-Logo.jpg" alt="flaming-FLAMINGOS-Logo"  width="30px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/random">Fun Zone</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <img
                  width='30'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWc56P5pW9BdCRU-_YRrYPn9IBiNye0fxuSA&usqp=CAU'
                  alt='Shopping cart icon'
                />
              </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/clothing">Clothing</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="jewelry">Jewelry</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="productslist"> All Items </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
       </nav>
    </div>
  );
}

export default Header;