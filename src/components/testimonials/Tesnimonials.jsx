

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './testimonials.css';

import testimonialImg from '../../assets/images/review1.png';

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
            <h2 className='mb-4'>What our customers are saying</h2>
                <Slider {...settings}>
                <div>
                    <div className='single_testimonial'>
                    <p className='review_content'>Ex ut nostrud laborum reprehenderit dolor ad.
                     Aliqua id dolor cillum quis nostrud do aliqua voluptate qui reprehenderit irure laborum. 
                     Anim sunt fugiat esse nulla laborum in elit excepteur id mollit pariatur duis laborum. 
                     Dolor id quis velit ut culpa irure est.
                     </p>

                     <h6>John Doe</h6>
                     <p>Web Developer</p>

                    </div>
                </div>

                <div>
                    <div className='single_testimonial'>
                    <p className='review_content'>Ex ut nostrud laborum reprehenderit dolor ad.
                     Aliqua id dolor cillum quis nostrud do aliqua voluptate qui reprehenderit irure laborum. 
                     Anim sunt fugiat esse nulla laborum in elit excepteur id mollit pariatur duis laborum. 
                     Dolor id quis velit ut culpa irure est.
                     </p>

                     <h6>John Doe</h6>
                     <p>Web Developer</p>

                    </div>
                </div>

                <div>
                    <div className='single_testimonial'>
                    <p className='review_content'>Ex ut nostrud laborum reprehenderit dolor ad.
                     Aliqua id dolor cillum quis nostrud do aliqua voluptate qui reprehenderit irure laborum. 
                     Anim sunt fugiat esse nulla laborum in elit excepteur id mollit pariatur duis laborum. 
                     Dolor id quis velit ut culpa irure est.
                     </p>

                     <h6>John Doe</h6>
                     <p>Web Developer</p>

                    </div>
                </div>
                </Slider>
            </div>

            <div className='slider_img w-50'>
            <img src={testimonialImg} alt='' className='w-100' />
            </div>
            </div> 
            </Col>
        </Row>
    </Container>
  </section>
}

export default Tesnimonials;