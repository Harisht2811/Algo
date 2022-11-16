import React from 'react'
import '../algoaboutbanner/algoaboutbanner.css'

import Aboutbanner from '../../../images/aboutus/aboutus1.png'
import Aboutbtnimg from '../../../images/aboutus/aboutus8.png'


function algoaboutbanner() {
  return (
    <>
    <div className='algoaboutBanner'>
      <img className='aboutusbannerimg' src={Aboutbanner} alt='bannerimg'></img>
    </div>
    <div className='aboutbannerText'>
      <img className='aboutusbtnimg' src={Aboutbtnimg} alt='btnimg'></img>
      <p id='aboutText'>The leading Cyber Security partner -World’s No. 1 partner</p>
    </div>
    </>
  )
}

export default algoaboutbanner