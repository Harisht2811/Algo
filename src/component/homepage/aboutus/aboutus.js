import React from 'react'
import '../aboutus/aboutus.css'

import AboutusImg from '../../../images/homepage/algohome16.png'
import AboutusImgRes from '../../../images/homepage/algohome35.png'

// function aboutus() {
//   return (
//     <>
//     <div className='algoAboutus'>
//         <img className='aboutusImg' src={AboutusImg} alt='aboutusimg'></img>
//         <img className='aboutusImgRes' src={AboutusImgRes} alt='aboutusimg'></img>
//         <div className='aboutusText'>
//         <p id='aboutusTitle'>ABOUT US</p>
//         <p id='aboutusText1'>Professional. Trusted. Advanced</p>
//         <p id='aboutusText2'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization and suggest countermeasures to reduce the risk.</p>
//     </div>
//     </div>
 
//     </>
//   )
// }

// export default aboutus


import aboutus from "../../../content/aboutusData.json"
function Aboutus() {
  return (
    <>
    {aboutus.map((item,index)=> {
     return <div className='algoAboutus' key={index}>
        <img className='aboutusImg' src={AboutusImg} alt='aboutusimg'></img>
        <img className='aboutusImgRes' src={AboutusImgRes} alt='aboutusimg'></img>
        <div className='aboutusText'>
        <p id='aboutusTitle'>{item.aboutusTitle1}</p>
        <p id='aboutusText1'>{item.aboutusTitle2}</p>
        <p id='aboutusText2'>{item.aboutusText}</p>
    </div>
    </div>
 })}
    </>
  )
}

export default Aboutus