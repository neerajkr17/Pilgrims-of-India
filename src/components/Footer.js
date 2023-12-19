import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

// Footer component
const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <Row>
          <Col>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaInstagram /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaGithub /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-white mx-2"><FaYoutube /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
