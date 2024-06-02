import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BookDetails from './det'; // Assuming 'det.js' is correctly named and exported as BookDetails
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Navbar.Brand>
            <img
              alt="BookNest"
              src="books.png"
              className='logo'
            />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Books" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Crime</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mystery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sci-fi</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Fiction novels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Non-Fiction novels</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Manga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Comics</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#About">About us</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Nav>
        </Navbar>

        <Carousel fade>

      <Carousel.Item>
        <img 
        className='Dune book'
        src="https://hips.hearstapps.com/hmg-prod/images/sci-fi-1647637695.jpg"
        alt='Slide'
        />
        <Carousel.Caption>
          <h3>Science-Fiction</h3>
          <p>Best-sellers in sci-fi, Dune, Martian Chronicles, Three Body Problem and more.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className='Dune book'
        src="https://childhood101.com/wp-content/uploads/2015/09/Favourites-Picture-Books-from-the-80s-and-90s.jpg"
        alt='Slide'
        />
        <Carousel.Caption>
          <h3>Children's classics for under Rs.799</h3>
          <p>Franklin in the dark, Farmer's duck, Jolly Postman and more</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='Dune book'
        src="https://media.glamourmagazine.co.uk/photos/63bed3181baa0b52245d36da/16:9/w_2580,c_limit/SELF%20HELP%20BOOKS%20110123%20default-land.jpg"
        alt='Slide'
        />
        <Carousel.Caption>
          <h3>Bestsellers in Self-Help</h3>
          <p>Help yourself and help our pockets</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className='Dune book'
        src="https://www.telegraph.co.uk/content/dam/books/2018/06/20/biogs-comp_trans_NvBQzQNjv4BqM37qcIWR9CtrqmiMdQVx7NaZIr6BIRvvm1FZVuZurho.jpg"
        alt='Slide'
        />
        <Carousel.Caption>
          <h3>Tales of greatness under Rs.1099</h3>
          <p>Read the life of legends, Steve Jobs, Peter the Great, Adolph Hitler and more</p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
        
        <Container>
          <Row>
            <Col>
              <img alt="1984" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a4557793312907.5e6139cf2b2b6.jpg"/>
              <h1>1984</h1>
              <p>George Orwell, at ₹800</p>
              <Button href="https://www.amazon.in/1948-Andy-Croft/dp/1907869328" variant="dark">Add To Cart</Button>{''}
              <Link to="/book-details"><Button variant="info">View Details</Button></Link>
            </Col>
        <Col>
        <img
        alt="LOTR"
        src="https://m.media-amazon.com/images/I/81nV6x2ey4L._AC_UF1000,1000_QL80_.jpg"
        />
        <h1>Lord Of The Rings</h1>
        <p>JRR Tolkien, at ₹2000</p>
        <Button href="https://www.amazon.in/Lord-Rings-J-R-Tolkien/dp/0008537763" variant="dark">Add To Cart</Button>{''}
        <Button href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"variant="info">View Details</Button>{''}
        </Col>
        <Col>
        <img
        alt="48 LOP"
        src="https://m.media-amazon.com/images/I/61J3Uu4jOLL._AC_UF1000,1000_QL80_.jpg"
        />
        <h1>The 48 Laws Of Power</h1>
        <p>Robert Greene, at ₹1200</p>
        <Button href="https://www.amazon.in/Laws-Power-Robert-Greene-Collection/dp/1861972784" variant="dark">Add To Cart</Button>{''}
        <Button href="https://en.wikipedia.org/wiki/The_48_Laws_of_Power "variant="info">View Details</Button>{''}
        </Col>
        </Row>
        </Container>

        <Routes>
          <Route path="/book-details" element={<BookDetails />} />
        </Routes>

        <footer className="footer">
          <span className="text-muted">BookNest &copy; 2023</span>
          <br/><Link to="#">LinkedIn</Link>
          <br/><Link to="#">Instagram</Link>
          <br/><Link to="#">GitHub</Link>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;