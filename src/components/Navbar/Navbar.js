//import { useContext, useState } from 'react'
//import SVG from 'react-inlinesvg'
//import SunIcon from '../../assets/svg/sun.svg'
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#Projects">Projects</a>
        </li>

        <li className="nav-item">
          <a
            href="#Skills"
            //onClick={toggleNavList}
          >
            Skills
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#Contact"
            //onClick={toggleNavList}
          >
            Contact
          </a>
        </li>
        {/*
        <li className='nav-item'>
          <a
            href='#contact'
            //onClick={toggleNavList}
          >
            Resume
          </a>
        </li>
        <li className='nav-item'>
          <SVG src={SunIcon} />
        </li>
        <button
          type='button'
          aria-label='toggle theme'
        >
          {themeName === 'dark' ? <SunIcon /> : <DarknessIcon />}
        </button>
        */}
      </ul>
    </nav>
  );
};

export default Navbar;
