import React from 'react';
import { Container } from 'reactstrap';
import Slider from 'react-slick';
import { peopleData } from '../../assets/fake-data/sliderPeople';
import './people.css';

const People = () => {

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
        <Slider {...settings}>
        {
                peopleData.map(item => (
                    <div key={item.id}>
                        <div className='slider_wrapper d-flex align-items-center justify-content-between pt-5'>
                        <div className='slider_content w-100 ps-2'>
                        <h2 className='mb-3'>{item.title}</h2>
                        <p>{item.desc}</p>
                        </div>
                        <div className='slider_img w-50'>
                        <img src={item.imgUrl} alt='' className='people_image w-100'/>
                        </div>
                        </div>
                    </div>
                ))
            }
        </Slider>
    </Container>
  </section>
}

export default People;