import React from 'react'
import { useState, useEffect } from 'react'
import { MdOutlineDarkMode } from 'react-icons/md'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {

  // const localTheme = JSON.parse(localStorage.getItem('key_name')) || false;
  const [scheme, setScheme] = useState(false);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('light', scheme);
    // localStorage.setItem('key_name', scheme); 
  }, [scheme]);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
      navbar.classList.toggle("open", toggle);
  }, [toggle]);


  
  return (
    <nav className='navbar' id='navbar'>
      <div className="container flex justify-between items-center mx-auto text-center">

      <div className='my-logo'>
        <div className='circle'><span className="firstLetter">A</span><div className="half-circle"></div></div>
        <span className="otherLetters" draggable="false">bid</span>
      </div>
    
      <div className="nav-holder">
        <ul className='nav-list'>
        {[
          'home',
          'about',
          'skills',
          'services',
          'work',
          'contact'
        ].map((item) => (
            <li className='nav-link' key={`link-${item}`}>
              <a href={`#${item}`} draggable="false"> {item}</a>
            </li>
          ))}
        </ul>
      </div>

      <Tippy content={<div className="special"><span className="">Toggle</span> <span className="tooltip">Theme</span></div>} theme='default' placement='bottom' duration={0} arrow={true} animation="shift-toward-subtle" allowHTML={true}>
        <button className='toggleBtn' id='toggleBtn' onClick={()=> setScheme(!scheme) }>
          <MdOutlineDarkMode/>
        </button>
      </Tippy>

      <div className='menuBtn hamburger' onClick={()=> setToggle(!toggle) }>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

    </div>
    </nav>
    
  )
}

export default Navbar