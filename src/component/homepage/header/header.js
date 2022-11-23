import React, { useState } from 'react'
import '../header/header.css'
import { Link } from 'gatsby'

import headerData from '../../../content/headerData.json'
import Popup from '../../../component/homepage/popupcard/popupcard'
import algoLogo from '../../../images/homepage/algohome23.png'
import Toggleicon from '../../../images/homepage/algohome31.svg'
import Closebtn from '../../../images/homepage/algohome32.svg'
import { color, fontWeight } from '@mui/system'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'



function Header() {
  const [open, setOpen] = useState(false);


  const openmodal = () => {
    console.log('open clicked')
    setOpen(true)
  }

  const closemodal = (data) => {
    console.log("data", data)
    setOpen(data)
  }

  const activeLinkstyles = ({ isActive }) => {
    return {
      color: isActive ? '#00CD78' : 'white',
      fontWeight: isActive ? 'bold' : 'normal'
    }


  }


  return (
    <>

      {console.log('open clicked', open)}
      <header className='algoheader'>
        <div className='logo'>
          <img className='algoLogo' src={algoLogo} alt='logoIcon'></img>
        </div>
        <div className='links'>

          <ul>
            { typeof window !== 'undefined'? 
            window.innerWidth<768?"":
            window.innerWidth>=1024?
              headerData.laptopMenu.map(item => {
                console.log(headerData);
                return <li><Link to={item.routeLink} activeClassName="active-link" className={item ? item.activeLink : " "}>{item.navLink}</Link></li>
              }):headerData.tabMenu.map(item => {
                console.log(headerData);
                return <li><Link to={item.routeLink} activeClassName="active-link" className={item ? item.activeLink : " "}>{item.navLink}</Link></li>
              })
            :''}
           
          </ul>
          {/* {
            typeof window !=='undefined'?
            window.innerWidth<768?"":
            window.innerWidth>=1024?
            <Router>
            <ul>
              <li> <Link className="nav-link" activeClassName="active-link" to="/">Home</Link></li>
              <li><Link className="nav-link" activeClassName="active-link" to="/ransomware">Ransomware</Link></li>
              <li><Link className="nav-link" activeClassName="active-link" to="/threatintelligence">Threat Intelligence</Link></li>
              <li><Link className="nav-link" activeClassName="active-link" to="/aboutus">About us</Link></li>
              <li><Link className="nav-link" activeClassName="active-link" to="/deepdark">Contact us</Link></li>
            </ul>
          </Router>:
          <Router>
          <ul>
           <li> <Link className="nav-link" activeClassName="active-link" to="/">Home</Link></li>
           <li><Link className="nav-link" activeClassName="active-link" to="/aboutus">About us</Link></li>
           <li><Link className="nav-link" activeClassName="active-link" to="/deepdark">Contact us</Link></li>
         </ul>
          </Router>:''
          
          } */}
         

        </div>
        <div className='homeServices'>
          <img id="myBtn" onClick={openmodal} src={Toggleicon} alt='toggleicon'></img>
          <p id='algoheaderText'>Services <img onClick={openmodal} className='toggleicon' src={Toggleicon} alt='toggleicon'></img></p>


          {
            open === true ? <Popup closemodal={closemodal} />
              //  <card className='dropDown'>
              //   {/* // <card className='dropDown' style={{ backgroundColor: '#141414', zIndex: '1', width: '240px', height: '540px',margin:'-10% 0 0 0',padding: '5% 10%'}}> */}
              //    <div className='flexServices'>
              //    <p id='serviceText'>Services 
              //    <span className='closeBtn' onClick={closemodal}><img  src={Closebtn}></img></span>
              //    </p>
              //    <div className='menu'>
              //     <p id='modaltext'>3rd Party Cyber Risk</p>
              //     <hr id='hrinhome'></hr>
              //     <p id='modaltext'>Attack Surface</p>
              //     <hr id='hrinhome'></hr>
              //     <p id='modaltext'>DDOS Hardening</p>
              //     <hr id='hrinhome'></hr>
              //     <p id='modaltext'>Deep & Dark Web</p>
              //     <hr id='hrinhome'></hr>
              //     <p id='modaltext'>Pentesting</p>
              //     <hr id='hrinhome'></hr>
              //     <p id='modaltext'>Phishing Detection</p>
              //     <hr id='hrinhome'></hr>
              //     <p id='modaltext'>Deep Cyber Investigations</p>
              //     <hr id='hrinhome'></hr>
              //     <p id='modaltext'>Virtual Humint Operations</p>
              //  </div>
              //    </div>


              //   </card>

              : ""
          }

        </div>

      </header>


    </>
  )
}

export default Header












