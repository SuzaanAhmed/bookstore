import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function BookDetails() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/a4557793312907.5e6139cf2b2b6.jpg" fluid />
        </Col>
        <Col md={8}>
          <h1>1984</h1>
          <p>George Orwell, at ₹800</p>
          <p>Detailed description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <h2>Author Information</h2>
          <p>George Orwell was a British novelist, essayist, and critic. He is best known for his dystopian novel "1984", which depicts a totalitarian future society.</p>
          <h2>Reviews</h2>
          <p>"A classic dystopian novel that is still relevant today." - John Doe</p>
          <p>"A must-read for anyone interested in politics and society." - Jane Smith</p>
          <Button variant="dark">Buy Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default BookDetails;