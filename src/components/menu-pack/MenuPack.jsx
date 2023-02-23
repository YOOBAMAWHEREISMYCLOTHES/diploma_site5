

import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './menu-pack.css';
import ProductCard from '../product-card/ProductCard';
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products';

const MenuPack = () => {
  return <section>
  <Container>
    <Row>
        <Col lg='12' className='text-center mb-5'><h3>Our Menu Pack</h3></Col>
    </Row>
  </Container>
  </section>
}

export default MenuPack