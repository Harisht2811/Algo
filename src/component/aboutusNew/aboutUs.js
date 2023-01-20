import React from 'react'
import aboutusbanner from '../../images/aboutUsNew/aboutUsBanner.png'
import aboutuslogo from '../../images/aboutUsNew/aboutUsLogo.png'
import './abutUs.css'

function aboutUs() {
  return (
    <div>
        <div className='abouBanner'>
          <img src={aboutuslogo} alt="aboutuslogo" className='aboutuslogo'/>
          <div>
            <p className='algoritmik'>Algoritmik, your advanced</p><br></br>
            <p className='infosec'>infosec partner</p>
            <p className='headPara'>Headquartered in <span className='san'>San Diego, California and Tel Aviv, Israel.</span><br></br>
Algoritmik is a global taskforce of InfoSec and Threat-Intelligence analysts. Our world-class team is comprised of veterans of the <span className='san'>Israeli IDF 8200 Intelligence unit </span>and other elite security organizations.</p>
          </div>
        </div>
    </div>
  )
}

export default aboutUs