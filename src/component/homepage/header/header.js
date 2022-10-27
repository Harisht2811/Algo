import React from 'react'
import '../header/header.css'
import { Link } from 'gatsby'
import headerData from '../../../content/headerData.json'
import headerLogo from '../../../images/homepage/algohome23.png'


function header() {
  return (
    <>

      <header className='header'>
        <div className='logo'>
          <img src={headerLogo} alt='logoIcon'></img>
        </div>
        <div className='links'>
          {/* <ul>
               <li>Home</li>
               <li>Product Development</li>
               <li>BlockChain Development</li>
               <li>Data Engineering</li>
           </ul> */}
          <ul>
            {
              headerData.map(item => {
                console.log(headerData);
                return (<>
                  <li><Link to={item.routeLink} className={item ? item.activeLink : " "}>{item.navLink}</Link></li>
                </>

                );

              })
            }
          </ul>

        </div>
        <p id='serviceText'>Services</p>
      </header>

    </>
  )
}

export default header