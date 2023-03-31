import React, { Fragment } from 'react'
import Header from '../components/header/Header'
import HeroSlider from '../components/hero-slider/HeroSlider';
import PopularMenu from '../components/popular-menu/PopularMenu';
import ChooseUs from '../components/choose-us/ChooseUs';
import MenuPack from '../components/menu-pack/MenuPack';
import Tesnimonials from '../components/testimonials/Tesnimonials';
import Download from '../components/download-section/Download';
import Footer from '../components/footer/Footer';
import Reservation from '../components/reservation/Reservation';
import People from '../components/people/People';

const Home = () => {
  return <Fragment>
    <Header />
    <HeroSlider />
    <PopularMenu />
    <ChooseUs />
    <People />
    <MenuPack />
    <Tesnimonials />
    <Reservation />
    <Download />
    <Footer />
  </Fragment>
}

export default Home;