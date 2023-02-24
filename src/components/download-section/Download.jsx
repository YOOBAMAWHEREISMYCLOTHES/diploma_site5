

import React from 'react';
import './download.css';
import { Container, Row, Col } from 'reactstrap';
import appImg from '../../assets/images/app.png';

const Download = () => {
  return <section>
    <Container className='app_container'>
    <Row>
    <Col lg='6' md='6'>
    <div className='app_img'>
    <img src={appImg} alt='' />
    </div>
    </Col>

    <Col lg='6' md='6'>
    <div className='app_content'>
    <h5>Download our app</h5>
    <h2 className='mb-4'>Never Feel Hungry! Download Our Mobile Application Order Delicious Food</h2>
    <p>Sint ex elit irure nulla duis ipsum qui elit ut eu labore et pariatur.
    Ipsum consequat non eu non anim sit eu ex occaecat excepteur irure.</p>

    <div className='app_btns d-flex align-items-center gap-5 mt-4'>
    <button className='btn_apple d-flex align-items-center gap-3'>
    <i class="ri-app-store-fill"></i><a href='#'>App Store</a>
    </button>

    <button className='btn_google d-flex align-items-center gap-3'>
    <i class="ri-google-play-fill"></i><a href='#'>Google Play</a>
    </button>

    </div>

    </div>
    </Col>
    </Row>
    </Container>
  </section>
}

export default Download;