import React from 'react'
import '../aboutus/aboutus.css'

import AboutusImg from '../../../images/homepage/algohome16.png'
import AboutusImgRes from '../../../images/homepage/algohome35.png'

function aboutus() {
  return (
    <>
    <div className='algoAboutus'>
        <img className='aboutusImg' src={AboutusImg} alt='aboutusimg'></img>
        <img className='aboutusImgRes' src={AboutusImgRes} alt='aboutusimg'></img>
        <div className='aboutusText'>
        <p id='aboutusTitle'>ABOUT US</p>
        <p id='aboutusText1'>Global. Advanced. Holistic.</p>
        <p id='aboutusText2'>Algoritmik is a global team of multidisciplinary digital experts with backgrounds in Cyber Intelligence, Infosec, WEBINT, OSINT, Business <br/> Intelligence (BI), Ad-tech, HUMINT and Big Data Analytics. With more than 100 years of combined expertise across the cyber/digital universe,  <br/> our world-class specialists collaborate to build and deliver critical tools and services for public and private sectors. <br/> Algoritmik’s offices are located in San Diego, USA; Mexico City, Mexico; and Tel Aviv, Israel.</p>
    </div>
    </div>
 
    </>
  )
}

export default aboutus


// import aboutus from "../../../content/aboutusData.json"
// function Aboutus() {
//   return (
//     <>
//     {aboutus.map((item,index)=> {
//      return <div className='algoAboutus' key={index}>
//         <img className='aboutusImg' src={AboutusImg} alt='aboutusimg'></img>
//         <img className='aboutusImgRes' src={AboutusImgRes} alt='aboutusimg'></img>
//         <div className='aboutusText'>
//         <p id='aboutusTitle'>{item.aboutusTitle1}</p>
//         <p id='aboutusText1'>{item.aboutusTitle2}</p>
//         <p id='aboutusText2'>{item.aboutusText}</p>
//     </div>
//     </div>
//  })}
//     </>
//   )
// }

// export default Aboutus