import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

function DarazNavbar() {
  return (
    <>
    <Navbar expand="lg" className="daraz-navbar">
      <Container fluid className="daraz-container">

        {/* Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center logo-wrapper">
          <img
            className="daraz-logo"
            src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
            alt="Daraz"
          />
        </Navbar.Brand>

        {/* Search Bar */}
        <Form className="daraz-search d-flex">
          <FormControl
            type="search"
            placeholder="Search in Daraz"
            className="search-input"
          />
          <Button className="search-btn">
            <FaSearch />
          </Button>
        </Form>

        {/* Cart Icon */}
        <div className="cart-icon">
          <FaShoppingCart className="cart-icon-img" />
        </div>
      </Container>
    </Navbar>
    </>
  );
}

export default DarazNavbar;
