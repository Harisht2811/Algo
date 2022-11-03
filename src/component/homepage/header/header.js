import React, { useState } from 'react'
import '../header/header.css'
import { Link } from 'gatsby'

import headerData from '../../../content/headerData.json'
import algoLogo from '../../../images/homepage/algohome23.png'
import Toggleicon from '../../../images/homepage/algohome31.svg'
import Closebtn from '../../../images/homepage/algohome32.svg'



function Header() {
  const [open, setOpen] = useState(false);
  

  const openmodal = () => {
    console.log('open clicked')
    setOpen(true)
  }

  const closemodal = () => {
    setOpen(false)
  }
 

  return (
    <>

      {console.log('open clicked', open)}
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

          <img id="myBtn" onClick={openmodal} className='toggleicon' src={Toggleicon} alt='toggleicon'></img>
          {
            open === true ?
             <card className='dropDown'>
              {/* // <card className='dropDown' style={{ backgroundColor: '#141414', zIndex: '1', width: '240px', height: '540px',margin:'-10% 0 0 0',padding: '5% 10%'}}> */}
               <div className='flexServices'>
               <p id='serviceText'>Services 
               <span className='closeBtn' onClick={closemodal}><img  src={Closebtn}></img></span>
               </p>
               </div>
             

                <p id='modaltext'>3rd Party Cyber Risk</p>
                <hr id='hrinhome'></hr>
                <p id='modaltext'>Attack Surface</p>
                <hr id='hrinhome'></hr>
                <p id='modaltext'>DDOS Hardening</p>
                <hr id='hrinhome'></hr>
                <p id='modaltext'>Deep & Dark Web</p>
                <hr id='hrinhome'></hr>
                <p id='modaltext'>Pentesting</p>
                <hr id='hrinhome'></hr>
                <p id='modaltext'>Phishing Detection</p>
                <hr id='hrinhome'></hr>
                <p id='modaltext'>Deep Cyber Investigations</p>
                <hr id='hrinhome'></hr>
                <p id='modaltext'>Virtual Humint Operations</p>

              </card>

        :" "
             }

      </div>

    </header>


    </>
  )
}

export default Header












