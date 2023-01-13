import React from 'react'
import { useState } from 'react'
import '../homebanner/homebanner.css'
import Popup from '../../getdemo/getdemo'
import Homebanner from '../../../images/homepage/algohome1.png'
import HomebannerRes from '../../../images/homepage/algohome34.png'

function Algohome() {
  const [buttonPopup, setButtonPopup] =useState(false);

  return (
    <>
    <div className='homebg'>
      <img className='homeBannerimg' src={Homebanner} alt='homebanner'></img>
      <img className='homeBannerimgRes' src={HomebannerRes} alt='homebanner'></img>

    </div>
    <div className='homeBanner'>
        <p id='homeBannerTitle'>Most InfoSec teams <br/><span id='colorText'>learn about breaches </span><br/>when it’s too late.</p>
        <p id='homeBannerText'>Mitigating risk requires an ironclad early-warning system. Algoritmik sends you critical alerts before breaches occur, setting a new global standard for security — and making threat actors late to the game.</p>
    <div className='bannerButton'>
    <button className='exploreButton' onClick={() => setButtonPopup(true)}>Learn more</button>
    </div>
    </div>

    <Popup trigger ={buttonPopup} setTrigger ={setButtonPopup}>
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

// import hombannerData from "../../../content/homebannerData.json"
// function Algohome() {
//   const [buttonPopup, setButtonPopup] = useState(false);
//   return (
//     <>
//       <div className='homebg'>
//         <img className='homeBannerimg' src={Homebanner} alt='homebanner'></img>
//         <img className='homeBannerimgRes' src={HomebannerRes} alt='homebanner'></img>

//       </div>
//       {hombannerData.map((item,index)=>{
//       return <div className='homeBanner' key={index}>
//         <p id='homeBannerTitle'>{item.bannerTitle1}<span id='colorText'>{item.bannerTitle2} </span>{item.bannerTitle3}</p>
//         <p id='homeBannerText'>{item.bannerText}</p>
//         <div className='clients'>
//           {item.achievements.map((item,index) =>{
//           return <div className='client1' key={index}>
//             <p id='clientnoText'>{item.counts}</p>
//             <p id='clientText'>{item.serviceText}</p>
//           </div>
//           })}
//         </div>
//         <div className='bannerButton'>
//           <button className='exploreButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
//         </div>
//       </div>
//       })}
//       <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
//         <p id='getintouch'>Get in touch with us </p>
//         <label>Name*</label>
//         <input className='Fname' type="text" ></input>
//         <label>Email*</label>
//         <input className='Femail' type="text" ></input>
//         <label>Mobile Number*</label>
//         <input className='Fphone' type="phone" ></input>
//         <button className='Fbutton'>Submit</button>
//       </Popup>
//     </>
//   )
// }

// export default Algohome