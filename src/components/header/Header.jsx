import './header.css';

import React, { useRef } from 'react';
import { Container } from 'reactstrap';

const navLinks = [
    {
        display: 'Головна',
        url: '#'
    },
    {
        display: 'Про нас',
        url: '#about'
    },

    {
        display: 'Меню',
        url: '#menu'
    },
    {
        display: 'Забронювати',
        url: '#book'
    },
    {
        display: 'Контакти',
        url: '#contact'
    },
];


const Header = () => {

const menuRef = useRef();

const menuToggle = () => menuRef.current.classList.toggle('active_menu');


  return (
    <header className='header'>
        <Container>
            <div className="navigation">
                <div className="logo_h">
                    <h3 className=' d-flex align-items-center gap-1'>
                        <span><i class="ri-restaurant-line"></i></span> Колиба
                    </h3>
                </div>
                <div className='nav_menu' ref={menuRef}>
                <div className='nav_list_wrapper d-flex align-items-center gap-5'>
                <ul className='nav_list'>

                {
                    navLinks.map((item, index)=>(
                        <li className='nav_item' key={index}>
                        <a href={item.url} onClick={menuToggle}>{item.display}</a>
                        </li>
                    ))
                }
                </ul>

                <div className='menu_right'>
                </div>
                </div>
                </div>
                
                <div className='mobile_menu'>
                <span><i class='ri-menu-3-line' onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>

    </header>
  )
}

export default Header;