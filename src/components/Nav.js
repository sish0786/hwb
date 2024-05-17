/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../resources/Logo.svg';
import "./styles/nav.css"
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <React.Fragment>
            <nav className=''> 
            <img alt='Logo.png' src={Logo}/>
                <ul id='navList'>
                    <li><a className='active' href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>What We Do</a></li>
                    <li><a href='#'>Team</a></li>
                    <li style={{marginLeft:"50px"}}><Button variant='contained' sx={{ backgroundColor: "#165A4A"
                    }}>Donate Items</Button></li>
                </ul>
                <IconButton
                    sx={{
                        color: "#165A4A",
                        position:"absolute",
                        right:"20px",
                        top:"10px",
                        display:"none",
                        '@media (max-width: 930px)':{display: 'block'}
                        }}
                        onClick={() => {
                            const navList = document.getElementById("navList");
                            navList.style.left = navList.style.left === '0px' ? '-100%' : '0px';
                          }}                          
                        >
                <MenuIcon  fontSize="large"></MenuIcon>
                </IconButton>
            </nav>
    </React.Fragment>
  )
}

export default NavBar;