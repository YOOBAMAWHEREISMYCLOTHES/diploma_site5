

import React from 'react';
import './download.css';
import { Container, Row, Col } from 'reactstrap';
import appImg from '../../assets/images/app.gif';

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
    <h5>Перейдіть за посиланнями нижче</h5>
    <h2 className='mb-4'>Залишайтесь на зв'язку! Підпишіться на наші сторінки в соцмережах Twitter та Instagram</h2>
    <p>Там ми регулярно ділимося свіжими новинками та акціями, додаємо нові фото та відео, щоб ви завжди залишались в курсі наших останніх новин.</p>

    <div className='app_btns d-flex align-items-center gap-5 mt-4'>
    <button className='btn_instagram d-flex align-items-center gap-3'>
    <i class="ri-instagram-line"></i><a href='#'>Instagram</a>
    </button>

    <button className='btn_twitter d-flex align-items-center gap-3'>
    <i class="ri-twitter-line"></i><a href='#'>Twitter</a>
    </button>

    </div>

    </div>
    </Col>
    </Row>
    </Container>
  </section>
}

export default Download;