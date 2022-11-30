import React from 'react'
import { useState } from 'react'
import '../homebanner/homebanner.css'
import Popup from '../../getdemo/getdemo'
import Homebanner from '../../../images/homepage/algohome1.png'
import HomebannerRes from '../../../images/homepage/algohome34.png'

// function Algohome() {
//   const [buttonPopup, setButtonPopup] =useState(false);

//   return (
//     <>
//     <div className='homebg'>
//       <img className='homeBannerimg' src={Homebanner} alt='homebanner'></img>
//       <img className='homeBannerimgRes' src={HomebannerRes} alt='homebanner'></img>

//     </div>
//     <div className='homeBanner'>
//         <p id='homeBannerTitle'>Innovative tool for creating<span id='colorText'> highly customized security </span>roadmaps.</p>
//         <p id='homeBannerText'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization and suggest countermeasures to reduce the risk.</p>
//    <div className='clients'>
//       <div className='client1'>
//         <p id='clientnoText'>200+</p>
//         <p id='clientText'>Professionals</p>
//       </div>
//       <div className='client2'>
//         <p id='clientnoText'>5000+</p>
//         <p id='clientText'>Testings & attacks</p>
//       </div>
//       <div className='client3'>
//         <p id='clientnoText'>100+</p>
//         <p id='clientText'>Clients & Customers</p>
//       </div>
//       <div className='client4'>
//         <p id='clientnoText'>50+</p>
//         <p id='clientText'>World countries</p>
//       </div>
//     </div>
//     <div className='bannerButton'>
//     <button className='exploreButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
//     </div>
//     </div>

//     <Popup trigger ={buttonPopup} setTrigger ={setButtonPopup}>
//      <p id='getintouch'>Get in touch with us </p>
//      <label>Name*</label>
//      <input className='Fname' type="text" ></input>
//      <label>Email*</label>
//      <input className='Femail' type="text" ></input>
//      <label>Mobile Number*</label>
//      <input className='Fphone' type="phone" ></input>
//      <button className='Fbutton'>Submit</button>    
//     </Popup>
//     </>
//   )
// }

// export default Algohome

import hombannerData from "../../../content/homebannerData.json"
function Algohome() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className='homebg'>
        <img className='homeBannerimg' src={Homebanner} alt='homebanner'></img>
        <img className='homeBannerimgRes' src={HomebannerRes} alt='homebanner'></img>

      </div>
      {hombannerData.map(item =>{
      return <div className='homeBanner'>
        <p id='homeBannerTitle'>{item.bannerTitle1}<span id='colorText'>{item.bannerTitle2} </span>{item.bannerTitle3}</p>
        <p id='homeBannerText'>{item.bannerText}</p>
        <div className='clients'>
          {item.achievements.map(item =>{
          return <div className='client1'>
            <p id='clientnoText'>{item.counts}</p>
            <p id='clientText'>{item.serviceText}</p>
          </div>
          })}
        </div>
        <div className='bannerButton'>
          <button className='exploreButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
        </div>
      </div>
      })}
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p id='getintouch'>Get in touch with us </p>
        <label>Name*</label>
        <input className='Fname' type="text" ></input>
        <label>Email*</label>
        <input className='Femail' type="text" ></input>
        <label>Mobile Number*</label>
        <input className='Fphone' type="phone" ></input>
        <button className='Fbutton'>Submit</button>
      </Popup>
    </>
  )
}

export default Algohome