import React from 'react'
import { Link } from 'gatsby'
import '../services/services.css'

import Arrowimage from '../../../images/homepage/algohome30.svg'
function services() {
  return (
   <>
   <div className='algoservices'>
    <p id='servicesText'>Other Services</p>
    <div className='servicesCard'>
        <div className='innercard'>
          <div className='textCards'>
            <p id='cardText'>Deep Cyber Investigations</p>
            <Link to='/'><img className='arrowImg' src={Arrowimage} alt='arrowImage'></img></Link>
          </div>
          <p id='belowcardText'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets.</p>
        </div>
        <div className='innercard'>
        <div className='textCards'>
            <p id='cardText'>Pentesting</p>
            <Link to='/'><img className='arrowImg' src={Arrowimage} alt='arrowImage'></img></Link>
          </div>
          <p id='belowcardText'>To protect your organization, you first need to know what assets and digital surface to protect</p>
        </div>
        <div className='innercard'>
        <div className='textCards'>
            <p id='cardText'>Phishing<br></br>Detection</p>
            <Link to='/phishing'><img className='arrowImg' src={Arrowimage} alt='arrowImage'></img></Link>
          </div>
          <p id='belowcardText'>To protect your organization, you first need to know what assets and digital surface to protect</p>
        </div>
        <div className='innercard'>
        <div className='textCards'>
            <p id='cardText'>Ransomeware</p>
            <Link to='/ransomware'><img className='arrowImg' src={Arrowimage} alt='arrowImage'></img></Link>
          </div>
          <p id='belowcardText'>To protect your organization, you first need to know what assets and digital surface to protect</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default services