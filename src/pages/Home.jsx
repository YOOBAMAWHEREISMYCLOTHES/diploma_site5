import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import HeroSlider from '../components/hero-slider/HeroSlider';
import PopularMenu from '../components/popular-menu/PopularMenu';
import ChooseUs from '../components/choose-us/ChooseUs';
import MenuPack from '../components/menu-pack/MenuPack';
import Tesnimonials from '../components/testimonials/Tesnimonials';
import Download from '../components/download-section/Download';

const Home = () => {
  return <Fragment>
    <Header />
    <HeroSlider />
    <PopularMenu />
    <ChooseUs />
    <MenuPack />
    <Tesnimonials />
    <Download />
  </Fragment>
  
}

export default Home