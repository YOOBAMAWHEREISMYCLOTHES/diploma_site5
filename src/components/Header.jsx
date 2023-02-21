import '../styles/_header.scss';

import React from 'react';
import { Container } from 'reactstrap';

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },

    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    },
]

const Header = () => {
  return (
    <header className='header'>
        <Container>
            <div className="navigation">
                <div className="logo">
                    <h2 className=' d-flex align-items-center gap-1'>
                        <span><i class="ri-restaurant-fill"></i></span> Chef Food
                    </h2>
                </div>
                <div className='nav_menu'>
                <ul className='nav_list'>

                {
                    navLinks.map((item, index)=>(
                        <li className='nav_item' key={index}>
                        <a href={item.url}>{item.display}</a>
                        </li>
                    ))
                }
                
                <li className='nav_item'><a href='#'>About</a></li>

                <li className='nav_item'><a href='#'>Menu</a></li>
                <li className='nav_item'><a href='#'>Recipes</a></li>
                <li className='nav_item'><a href='#'>Contact</a></li>

                </ul>
                </div>
                <div className='menu_right'>
                    <div className='custom_search'>
                        <input type='text' placeholder='Search item...' />
                        <span><i class="ri-search-2-line"></i></span>
                    </div>
                </div>
                <div className='mobile_menu'></div>
                <span><i class="ri-menu-3-line"></i></span>
            </div>
        </Container>

    </header>
  )
}

export default Header