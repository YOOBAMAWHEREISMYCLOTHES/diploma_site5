

import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css';

const footerQuickLinks = [

  {
    display: 'Terms & Conditions',
    url: '#'

  },

  {
    display: 'Privacy Policy',
    url: '#'

  },

  {
    display: 'Return & Refund',
    url: '#'

  },

  {
    display: 'Payment Method',
    url: '#'

  },

]

const footerLinks = [

  {
    display: 'About Us',
    url: '#'

  },

  {
    display: 'Menu',
    url: '#'

  },

  {
    display: 'Recipes',
    url: '#'

  },

  {
    display: 'Contact',
    url: '#'

  },

]

const Footer = () => {
  return ( <footer id='contact' className='footer'>
          <div className='footer_top'>
          <Container>
            <Row>
              <Col lg='4' md='4' sm='6'>
              <div className="logo">
                    <h2 className=' d-flex align-items-center gap-1 mb-4'>
                        <span><i class="ri-restaurant-fill"></i></span> Chef Food
                    </h2>
                    <p>Commodo culpa velit cupidatat excepteur amet eiusmod est laborum esse nostrud eiusmod labore.</p>
                </div>
              </Col>

              <Col lg='3' md='4' sm='6'>
                  <h5 className='footer_link-title'>Info Links</h5>

                  <ListGroup>

                  {
                    footerQuickLinks.map((item,index)=><ListGroupItem key={index} className='link_item'>
                    <a href={item.url}>{item.display}</a>
                    </ListGroupItem>)
                  }

                    
                  </ListGroup>
              </Col>

              <Col lg='2' md='4' sm='6'>
                  <h5 className='footer_link-title'>Quick Links</h5>

                  <ListGroup>

                  {
                    footerLinks.map((item,index)=><ListGroupItem key={index} className='link_item'>
                    <a href={item.url}>{item.display}</a>
                    </ListGroupItem>)
                  }

                    
                  </ListGroup>
              </Col>

              <Col lg='3' md='4' sm='6'>
              <h5 className='footer_link-title'>Contact</h5>

              <ListGroup>
                <ListGroupItem className='link_item d-flex align-items-center gap-3'>
                <i class="ri-map-pin-fill"></i>Kyiv, Ukraine</ListGroupItem>

                <ListGroupItem className='link_item d-flex align-items-center gap-3'>
                <i class="ri-mail-fill"></i>example@gmail.com</ListGroupItem>

                <ListGroupItem className='link_item d-flex align-items-center gap-3'>
                <i class="ri-phone-fill"></i>+3800992552525</ListGroupItem>
              </ListGroup>
              </Col>

            </Row>
          </Container>
          </div>
          <div className='footer_bottom'>
          <Container>
            <Row>
              <Col lg='12'>
              <p>Copyright © 2023, developed by <a href='https://www.linkedin.com/in/bohdan-dovhyi-4a1628216/'>Bohdan Dovhyi</a>. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
          </div>

  </footer>
  );
};

export default Footer;