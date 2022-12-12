import React from 'react'
import '../algoaboutbanner/algoaboutbanner.css'

// import Aboutbanner from '../../../images/aboutus/aboutus1.png'
// import Aboutbtnimg from '../../../images/aboutus/aboutus8.png'


// function algoaboutbanner() {
//   return (
//     <>
//     <div className='algoaboutBanner'>
//       <img className='aboutusbannerimg' src={Aboutbanner} alt='bannerimg'></img>
//     </div>
//     <div className='aboutbannerText'>
//       <img className='aboutusbtnimg' src={Aboutbtnimg} alt='btnimg'></img>
//       <p id='aboutText'>The leading Cyber Security partner -World’s No. 1 partner</p>
//     </div>
//     </>
//   )
// }

// export default algoaboutbanner

import aboutData from "../../../content/aboutData.json"
function algoaboutbanner() {
  return (
    <>
    {aboutData.map((item,index) => {
    return <div>
    <div className='algoaboutBanner' key={index}>
      <img className='aboutusbannerimg' src={item.abouBg} alt='bannerimg'></img>
    </div>
    <div className='aboutbannerText'>
      <img className='aboutusbtnimg' src={item.aboutBtn} alt='btnimg'></img>
      <p id='aboutText'>{item.aboutTitle}</p>
    </div>
    </div>
   })}
    </>
  )
}

export default algoaboutbanner