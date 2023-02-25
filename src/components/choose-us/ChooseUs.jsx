

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './choose-us.css';
import pastaImg from '../../assets/images/pasta.png';

const ChooseUs = () => {
  return <section>
    <Container>
       <Row>
        <Col lg='6' md='6'>
        <img src={pastaImg} alt='' className='w-100' />
        </Col>

        <Col lg='6' md='6'>
        <div className='choose_content'>
        <h4>Who we are?</h4>
        <h2>Take a look at benefits we offer you</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, itaque ipsum magnam quae alias.</p>
        </div>

        <div className='features mt-4'>
            <div className='feature1 d-flex align-items-center gap-5'>
            <div className='single_feature'>
            <span><i class="ri-truck-fill"></i></span>
            <h6>Free Home Delivery</h6>
            <p>Lorem ipsum sit dolor amet.</p>
            </div>

            <div className='single_feature'>
            <span className='feature_icon_two'><i class="ri-money-dollar-box-fill"></i></span>
            <h6>Return & refund</h6>
            <p>Lorem ipsum sit dolor amet.</p>
            </div>

            </div>

            <div className='feature1 mt-3 d-flex align-items-center gap-5'>
            <div className='single_feature'>
            <span className='feature_icon_three'><i class="ri-bank-card-fill"></i></span>
            <h6>Secure Payment</h6>
            <p>Lorem ipsum sit dolor amet.</p>
            </div>

            <div className='single_feature'>
            <span className='feature_icon_four'><i class="ri-24-hours-line"></i></span>
            <h6>24/7 Hours Support</h6>
            <p>Lorem ipsum sit dolor amet.</p>
            </div>

            </div>
        </div>
        </Col>
       </Row>
    </Container>
  </section>
}

export default ChooseUs;