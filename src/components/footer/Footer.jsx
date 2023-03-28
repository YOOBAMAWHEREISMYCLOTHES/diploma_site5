

import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css';

const footerQuickLinks = [

  {
    display: 'Правила та умови',
    url: '#'

  },

  {
    display: 'Політика конфіденційності',
    url: '#'

  },

  {
    display: 'Повернення та відшкодування',
    url: '#'

  },

  {
    display: 'Способи оплати',
    url: '#'

  },

]

const footerLinks = [

  {
    display: 'Головна',
    url: '#'

  },

  {
    display: 'Про нас',
    url: '#about'

  },

  {
    display: 'Меню',
    url: '#menu'

  },

  {
    display: 'Забронювати',
    url: '#testi'

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
                        <span><i class="ri-restaurant-line"></i></span> Колиба
                    </h2>
                    <p>Наша мета - передати гостям аутентичний дух української культури та традицій. Ми створюємо атмосферу, де можна відчути та познайомитись з культурою та кулінарними традиціями України.</p>
                </div>
              </Col>

              <Col lg='3' md='4' sm='6'>
                  <h5 className='footer_link-title'>Інформація</h5>

                  <ListGroup>

                  {
                    footerQuickLinks.map((item,index)=><ListGroupItem key={index} className='link_item'>
                    <a href={item.url}>{item.display}</a>
                    </ListGroupItem>)
                  }

                    
                  </ListGroup>
              </Col>

              <Col lg='2' md='4' sm='6'>
                  <h5 className='footer_link-title'>Навігація</h5>

                  <ListGroup>

                  {
                    footerLinks.map((item,index)=><ListGroupItem key={index} className='link_item'>
                    <a href={item.url}>{item.display}</a>
                    </ListGroupItem>)
                  }

                    
                  </ListGroup>
              </Col>

              <Col lg='3' md='4' sm='6'>
              <h5 className='footer_link-title'>Контакти</h5>

              <ListGroup>
                <ListGroupItem className='link_item d-flex align-items-center gap-3'>
                <i class="ri-map-pin-fill"></i><a href='https://goo.gl/maps/zxpYG4xnKrfA2MAb7'>Київ, Україна</a></ListGroupItem>

                <ListGroupItem className='link_item d-flex align-items-center gap-3'>
                <i class="ri-mail-fill"></i><a href='mailto:kolybarestaurant@gmail.com'>kolybarestaurant@gmail.com</a></ListGroupItem>

                <ListGroupItem className='link_item d-flex align-items-center gap-3'>
                <i class="ri-phone-fill"></i><a href='tel:+3800992552525'>+3800992552525</a></ListGroupItem>
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