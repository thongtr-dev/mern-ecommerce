import {
  Navbar,
  Nav,
  Container,
  NavbarCollapse,
  NavbarToggle,
  NavbarBrand,
  NavLink,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <NavbarBrand>MERN eCommerce</NavbarBrand>
          </LinkContainer>
          <NavbarToggle aria-controls='basic-navbar-nav' />
          <NavbarCollapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <NavLink>
                  <FaShoppingCart /> Cart
                </NavLink>
              </LinkContainer>
              <LinkContainer to='/login'>
                <NavLink>
                  <FaUser /> Sign in
                </NavLink>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
