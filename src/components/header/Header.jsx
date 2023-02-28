import './header.css';

import React, { useRef, useState } from 'react';
import { Container } from 'reactstrap';

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#about'
    },

    {
        display: 'Menu',
        url: '#menu'
    },
    {
        display: 'Recipes',
        url: '#testi'
    },
    {
        display: 'Contact',
        url: '#contact'
    },
]

const Header = () => {

const menuRef = useRef();

const menuToggle = () => menuRef.current.classList.toggle('active_menu');

let [ cartOpen, setCartOpen ] = useState(false);

  return (
    <header className='header'>
        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2 className=' d-flex align-items-center gap-1'>
                        <span><i class="ri-restaurant-fill"></i></span> Chef Food
                    </h2>
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
                    <div className='custom_search'>
                        <input type='text' placeholder='Search item...' />
                        <span><i class="ri-search-2-line"></i></span>
                    </div>
                </div>
                </div>
                </div>

                <div>
                    <span onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart_icon ${cartOpen && 'active'}`}>
                    <i class="ri-shopping-basket-2-fill"></i>
                    <span className='badge'>2</span>
                    </span>
                    {cartOpen && (
                        <div className='cart_menu'>

                        </div>
                    )}
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