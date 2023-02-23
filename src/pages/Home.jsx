import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import HeroSlider from '../components/hero-slider/HeroSlider';
import PopularMenu from '../components/popular-menu/PopularMenu';
import ChooseUs from '../components/choose-us/ChooseUs';

const Home = () => {
  return <Fragment>
    <Header />
    <HeroSlider />
    <PopularMenu />
    <ChooseUs />
  </Fragment>
  
}

export default Home