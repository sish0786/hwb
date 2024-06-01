/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Logo from '../resources/Logo.svg';
import "./styles/nav.css";
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [active, setActive] = useState('home');

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActive(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const sections = ['home', 'about', 'whatWeDo', 'team'];
    let currentSection = 'home';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offset = element.offsetTop - window.innerHeight / 2;
        if (window.scrollY >= offset) {
          currentSection = section;
        }
      }
    });

    setActive(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <nav className=''> 
        <img alt='Logo.png' src={Logo}/>
        <ul id='navList'>
          <li>
            <a
              className={active === 'home' ? 'active' : ''}
              href='#'
              onClick={(e) => handleNavClick(e, 'home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={active === 'about' ? 'active' : ''}
              href='#'
              onClick={(e) => handleNavClick(e, 'about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              className={active === 'whatWeDo' ? 'active' : ''}
              href='#'
              onClick={(e) => handleNavClick(e, 'whatWeDo')}
            >
              What We Do
            </a>
          </li>
          <li>
            <a
              className={active === 'team' ? 'active' : ''}
              href='#'
              onClick={(e) => handleNavClick(e, 'team')}
            >
              Team
            </a>
          </li>
          <li style={{ marginLeft: "50px" }}>
            <Button
              variant='contained'
              sx={{ backgroundColor: "#165A4A" }}
            >
              Donate Items
            </Button>
          </li>
        </ul>
        <IconButton
          sx={{
            color: "#165A4A",
            position: "absolute",
            right: "20px",
            top: "10px",
            display: "none",
            '@media (max-width: 930px)': { display: 'block' }
          }}
          onClick={() => {
            const navList = document.getElementById("navList");
            navList.style.left = navList.style.left === '0px' ? '-100%' : '0px';
          }}
        >
          <MenuIcon fontSize="large"></MenuIcon>
        </IconButton>
      </nav>
    </React.Fragment>
  )
}

export default NavBar;
