

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './choose-us.css';
import whoweare from '../../assets/images/whoweare.jpg';

const ChooseUs = () => {
  return <section id='about'>
    <Container>
       <Row>
        <Col lg='6' md='6'>
        <img src={whoweare} alt='' className='whoweare_image w-100' />
        </Col>

        <Col lg='6' md='6' className='choose_column'>
        <div className='choose_content'>
        <h4>Хто ми?</h4>
        <h2>Ознайомтеся з нашими пропозиціями</h2>
        <p>У нашому ресторані ми прагнемо забезпечити найкращий сервіс та атмосферу для наших гостей. </p>
        </div>

        <div className='features mt-4'>
            <div className='feature1 d-flex align-items-center gap-5'>
            <div className='single_feature'>
            <span><i class="ri-truck-fill"></i></span>
            <h6>Безкоштовна доставка</h6>
            <p>Працює безкоштовна доставка додому.</p>
            </div>

            <div className='single_feature'>
            <span className='feature_icon_two'><i class="ri-money-dollar-box-fill"></i></span>
            <h6>Повернення коштів</h6>
            <p>Можливість повернення коштів.</p>
            </div>

            </div>

            <div className='feature1 mt-3 d-flex align-items-center gap-5'>
            <div className='single_feature'>
            <span className='feature_icon_three'><i class="ri-bank-card-fill"></i></span>
            <h6>Безпечна оплата</h6>
            <p>Забезпечуємо безпечну оплату карткою</p>
            </div>

            <div className='single_feature'>
            <span className='feature_icon_four'><i class="ri-24-hours-line"></i></span>
            <h6>Підтримка 24/7</h6>
            <p>Розраховуйте на якісну підтримку</p>
            </div>

            </div>
        </div>
        </Col>
       </Row>
    </Container>
  </section>
}

export default ChooseUs;