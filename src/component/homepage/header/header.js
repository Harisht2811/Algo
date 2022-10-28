import React from 'react'
import '../header/header.css'
import { Link } from 'gatsby'
import headerData from '../../../content/headerData.json'
import algoLogo from '../../../images/homepage/algohome23.png'
function header() {
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
        <p id='algoheaderText'>Services</p>
      </header>


    </>
  )
}

export default header