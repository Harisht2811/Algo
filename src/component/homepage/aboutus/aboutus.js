import React from 'react'
import '../aboutus/aboutus.css'

import AboutusImg from '../../../images/homepage/algohome16.png'
function aboutus() {
  return (
    <>
    <div className='algoAboutus'>
        <img className='aboutusImg' src={AboutusImg} alt='aboutusimg'></img>
        <div className='aboutusText'>
        <p id='aboutusTitle'>ABOUT US</p>
        <p id='aboutusText1'>Professional. Trusted. Advanced</p>
        <p id='aboutusText2'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization and suggest countermeasures to reduce the risk.</p>
    </div>
    </div>
 
    </>
  )
}

export default aboutus