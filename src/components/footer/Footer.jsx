import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css';

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
    url: '#book'

  },

]

const Footer = () => {

  const shareUrl = 'https://YOOBAMAWHEREISMYCLOTHES.github.io/diploma_site5/';
  const shareTitle = 'Колиба | Ресторан';

  function handleFacebookShareClick() {
    const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
    window.open(facebookShareUrl, '_blank');
  }
  function handleTwitterShareClick() {
    const twitterShareUrl = `https://www.twitter.com/share?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
    window.open(twitterShareUrl, '_blank');
  }
  function handleLinkedinShareClick() {
    const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;
    window.open(linkedinShareUrl, '_blank');
  }

  return (<footer id='contact' className='footer'>
    <div className='footer_top'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='6'>
            <div className="logo">
              <h3 className=' d-flex align-items-center gap-1 mb-4'>
                <span><i class="ri-restaurant-line"></i></span> Колиба
              </h3>
              <p>Наша мета - передати гостям аутентичний дух української культури та традицій. Ми створюємо атмосферу, де можна відчути та познайомитись з культурою та кулінарними традиціями України.</p>
            </div>
          </Col>

          <Col lg='3' md='4' sm='6'>
            <h5 className='footer_link-title'>Навігація</h5>

            <ListGroup>

              {
                footerLinks.map((item, index) => <ListGroupItem key={index} className='link_item'>
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>)
              }

            </ListGroup>
          </Col>
          <Col lg='2' md='4' sm='6'>
            <h5 className='footer_link-title'>Поширте нас!</h5>

            <ListGroup>

              <ListGroupItem onClick={handleFacebookShareClick} className='link_item_f d-flex align-items-center gap-3'>
                <i class="ri-facebook-box-fill"></i><a href='#contact'>Facebook</a>
              </ListGroupItem>
              <ListGroupItem onClick={handleTwitterShareClick} className='link_item_t d-flex align-items-center gap-3'>
                <i class="ri-twitter-fill"></i><a href='#contact'>Twitter</a>
              </ListGroupItem>
              <ListGroupItem onClick={handleLinkedinShareClick} className='link_item_l d-flex align-items-center gap-3'>
                <i class="ri-linkedin-box-fill"></i><a href='#contact'>LinkedIn</a>
              </ListGroupItem>

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
                <i class="ri-phone-fill"></i><a href='tel:+3800992552525'>+380-99-255-2525</a></ListGroupItem>
            </ListGroup>
          </Col>

        </Row>
      </Container>
    </div>
    <div className='footer_bottom'>
      <Container>
        <Row>
          <Col lg='12' className='copyright'>
            <p>Copyright © 2023, developed by <a href='https://www.linkedin.com/in/bohdan-dovhyi-4a1628216/'>Bohdan Dovhyi</a>. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>

  </footer>
  );
};

export default Footer;