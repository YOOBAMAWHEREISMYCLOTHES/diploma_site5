

import React, { useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap';
import './menu-pack.css';
import ProductCard from '../product-card/ProductCard';
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts, } from '../../assets/fake-data/products';

const MenuPack = () => {

  const [filter, setFilter] = useState('RICE-MENU');
  const [products, setProducts] = useState(riceMenuProducts);

  
  useEffect(()=>{
  
    if (filter === 'RICE-MENU') {
  
      setProducts(riceMenuProducts)
  
    }
  
    if (filter === 'FAST-FOOD') {
      
      setProducts(fastFoodProducts)
  
    }
  
    if (filter === 'PIZZA') {
      
      setProducts(pizzaProducts)
  
    }
  
    if (filter === 'DESSERTS') {
      
      setProducts(dessertProducts)
  
    }
  
    if (filter === 'COFFEE') {
      
      setProducts(coffeeProducts)
  
    }
  
  }, [filter])

  return (
  <section>
  <Container>
    <Row>
        <Col lg='12' className='text-center mb-4'>
        <h3 className='menu_title'>Our Menu Pack</h3>
        </Col>
        <Col lg='12' className='text-center mb-5'>
        <button className={`filter_btn ${filter === 'FAST-FOOD' ? 'active_btn' : ''}`}
         onClick={()=> setFilter('FAST-FOOD')}>Fast Food</button>
        <button className={`filter_btn ${filter === 'RICE-MENU' ? 'active_btn' : ''}`}
         onClick={()=> setFilter('RICE-MENU')}>Rice Menu</button>
        <button className={`filter_btn ${filter === 'PIZZA' ? 'active_btn' : ''}`} 
         onClick={()=> setFilter('PIZZA')}>Pizza</button>
        <button className={`filter_btn ${filter === 'DESSERTS' ? 'active_btn' : ''}`}
         onClick={()=> setFilter('DESSERTS')}>Desserts</button>
        <button className={`filter_btn ${filter === 'COFFEE' ? 'active_btn' : ''}`}
         onClick={()=> setFilter('COFFEE')}>Coffee</button>
        </Col>

        {products.map((item) => (
            <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mb-4'>
            {''}
            <ProductCard item={item} />
            </Col>
          ))}
    </Row>
  </Container>
  </section>
  );
};

export default MenuPack;