import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <img src='https://cdn.glitch.global/4828fb69-43b2-4866-8668-341e7a65ecbd/logo_CursoDoo.svg?v=1689855255133'></img>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/content'>Products</Link>
                </li>

                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: 'white' }} />) : <FaBars size={20} style={{ color: 'white' }} />}

            </div>
        </div>
    )
}

export default Navbar