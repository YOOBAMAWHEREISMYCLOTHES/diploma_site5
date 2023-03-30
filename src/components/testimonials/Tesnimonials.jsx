

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './testimonials.css';

import testimonialImg from '../../assets/images/review1.jpg';

import Slider from 'react-slick';

const Tesnimonials = () => {

const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000

}

  return <section>
    <Container>
        <Row>
            <Col lg='8' sm='12' md='12' className='m-auto'>

            <div className='slider_wrapper d-flex align-items-center gap-5'>
            <div className='slider_content w-50'>
            <h2 className='mb-4'>Що про нас кажуть експерти?</h2>
                <Slider {...settings}>
                <div>
                    <div className='single_testimonial'>
                    <p className='review_content'>Цей ресторан української кухні є справжнім джерелом насолоди для справжніх гурманів! Я дуже вражений вишуканою атмосферою та незабутніми смаками, які пропонуються тут.
                     </p>

                     <h6>Анатолій Григоренко</h6>
                     <p>Ресторанний критик</p>

                    </div>
                </div>

                <div>
                    <div className='single_testimonial'>
                    <p className='review_content'>Я не можу не відзначити надзвичайно доброзичливий та уважний персонал, який зробив мій візит відмінним та незабутнім.
                     </p>

                     <h6>Юлія Мартинюк</h6>
                     <p>Ресторанний критик</p>

                    </div>
                </div>

                <div>
                    <div className='single_testimonial'>
                    <p className='review_content'>Я бажаю цьому ресторану подальших успіхів та обов'язково пораджуватиму його всім своїм знайомим, які бажають спробувати справжні українські страви в прекрасній атмосфері!
                     </p>

                     <h6>Віталій Кульчицький</h6>
                     <p>Ресторанний критик</p>

                    </div>
                </div>
                </Slider>
            </div>

            <div className='slider_img w-50'>
            <img src={testimonialImg} alt='' className='testi_img w-100' />
            </div>
            </div> 
            </Col>
        </Row>
    </Container>
  </section>
}

export default Tesnimonials;