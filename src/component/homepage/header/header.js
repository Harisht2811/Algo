import React from 'react'
import '../header/header.css'
import { Link } from 'gatsby'
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import headerData from '../../../content/headerData.json'
import algoLogo from '../../../images/homepage/algohome23.png'
import Toggleicon from '../../../images/homepage/algohome31.svg'

function Header() {
  const [age, setAge] = useState(' ');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <header className='algoheader'>
        <div className='logo'>
          <img src={algoLogo} alt='logoIcon'></img>
        </div>
        <div className='links'>
          <ul>
            {
              headerData.map(item => {
                console.log(headerData);
                return <li><Link to={item.routeLink} className={item ? item.activeLink : " "}>{item.navLink}</Link></li>
              })
            }
          </ul>
        </div>
        <div className='homeServices'>
        <p id='algoheaderText'>Services</p>
        <img onChange={handleChange} className='toggleicon' src={Toggleicon} alt='toggleicon'></img>
        <Select  >
          <div className='selectBg'>
          <MenuItem >3rd Party Cyber Risk</MenuItem>
          <hr id='hrinhome'></hr>
          <MenuItem>Attack Surface</MenuItem>
          <hr id='hrinhome'></hr>
          <MenuItem >DDoS Attack Simulation & Testing</MenuItem>
          <hr id='hrinhome'></hr>
          <MenuItem >DDOS Incident Response</MenuItem>
          <hr id='hrinhome'></hr>
          <MenuItem >Technology Hardening</MenuItem>
          <hr id='hrinhome'></hr>
          <MenuItem >Deep & Dark Web</MenuItem>
          </div>
          
        </Select>
        </div>
        
      </header>


    </>
  )
}

export default Header



