import React from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

import Logo from "../images/logo.png"
import { useState } from 'react'

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);

    const closeNavBarHandler = () => {
        if(window.innerWidth < 800) setIsNavShowing(false);
        else setIsNavShowing(true);
    }

  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='nav__logo' onClick={closeNavBarHandler}>
                <img src={Logo} alt="Navbar logo" />
            </Link>
            {isNavShowing && <ul className='nav__menu'>
                <li><Link to="/profile/abcd" onClick={closeNavBarHandler}>Archiver Archiver</Link></li>
                <li><Link to="/create" onClick={closeNavBarHandler}>Create Post</Link></li>
                <li><Link to="/authors" onClick={closeNavBarHandler}>Authors</Link></li>
                <li><Link to="/logout" onClick={closeNavBarHandler}>Logout</Link></li>
            </ul>
            
            }
            <button className="nav__toggle-btn"
            onClick={() => setIsNavShowing(!isNavShowing)}>
                {
                    isNavShowing ? <AiOutlineClose /> : <FaBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Header