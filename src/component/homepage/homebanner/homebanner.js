import React from 'react'
import '../homebanner/homebanner.css'

import Homebanner from '../../../images/homepage/algohome1.png'
function homebanner() {
  return (
    <>
    <div className='homebg'>
      <img className='homeBannerimg' src={Homebanner} alt='homebanner'></img>
    </div>
    <div className='homeBanner'>
        <p id='homeBannerTitle'>Innovative tool for creating<span id='colorText'> highly customized security </span>roadmaps.</p>
        <p id='homeBannerText'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization and suggest countermeasures to reduce the risk.</p>
   <div className='clients'>
      <div className='client1'>
        <p id='clientnoText'>200+</p>
        <p id='clientText'>Professionals</p>
      </div>
      <div className='client2'>
        <p id='clientnoText'>5000+</p>
        <p id='clientText'>Testings & attacks</p>
      </div>
      <div className='client3'>
        <p id='clientnoText'>100+</p>
        <p id='clientText'>Clients & Customers</p>
      </div>
      <div className='client4'>
        <p id='clientnoText'>50+</p>
        <p id='clientText'>World countries</p>
      </div>
    </div>
    <div className='bannerButton'>
    <button className='exploreButton'>Explore more</button>
    </div>
    </div>
   
    </>
  )
}

export default homebanner