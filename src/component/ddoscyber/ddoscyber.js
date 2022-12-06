
import React from 'react'
import { useState } from 'react'
import Ddoscyberbanner from '../../images/ddoscyber/ddoscyberbanner.png'
import Arrow from '../../images/ddoscyber/Arrow.png'
import Tick from '../../images/ddoscyber/Tick.png'
import Hexagon from '../../images/ddoscyber/Hexagon.png'
import CyberBanner2 from '../../images/ddoscyber/cyberBanner2.png'
import Rocket from '../../images/ddoscyber/rocket.png'
import ThreatActor from '../../images/ddoscyber/threatActor.png'
import ThreatLandscape from '../../images/ddoscyber/threatLandscape.png'
import arrow from '../../images/attacker/Arrow.png'
import Popup from '../getdemo/getdemo'
import './ddoscyber.css'
import './laptop.css'
import './tab.css'
import './mob.css'
import './mobile.css'
import './monitor.css'

function Ddoscyber() {
  const [buttonPopup, setButtonPopup] =useState(false);
  return (
    <>
    <div>
    <div>
    <div className='cyberBannerImg'>
        <p className='cyberTitle1'><span className='colorText'>Get the Intelligence</span> You Need,<br></br>When You Need It</p>
          <div className='cyberTitleFlex'>
             <div className='Arrow'>
              <img src={Arrow} alt='arrow' className='arrow'></img>
              <p id='arrow'>Strategic <br></br>Threat Intelligence</p>
              </div>
              <div className='Tick'>
                <img src={Tick} alt='tick' className='Tick'></img>
                <p id='tick'>Threat <br></br> Actor Profiling</p>
              </div>
              <div className='Hexagon'>
                <img src={Hexagon} alt='Hexagon' className='Hex'></img>
                <p id='hexagon'>Threat<br></br> Landscape Reports</p>
              </div>
          </div>
      </div>
      <div className='cyberBanner2'>
        <p className='cyberBanner2Par'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets. With Algoritmik’s Deep Dive Investigations, you can assess and respond to these threats with the help of our highly skilled analysts to build cybersecurity analysis, threat assessments, analytic projects and deep-dive reports, all customized to your needs</p>
      </div>
    </div>
      
      <div className='cardsCyber'>
      <div className='cyberCards'>
          <div className='strategicCard1'>
            <div className='strategicPara'> 
              <p className='strategicCard1Title'>Strategic <br></br>Threat Intelligence</p>
              <p className='card1Para'>Identify meaningful trends to gain a wider perspective by continuously analyzing threat data. Create strategic threat intelligence and security advisory reports that provide the basis for the formulation of strategy, policy, and longer-term decision-making</p>
              <p id='demo1'>Get a Demo <img src={arrow} className='demoArrow' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
            </div>
            <img src={Rocket} className='cardImg' alt='rocket'></img>
          </div>
          <div className='threatCard2'>
            <div className='threatPara'>
              <p className='ThreatActorTitle'>Threat <br></br>Actor Profiling</p>
              <p className='card2Para'>Achieve deeper understanding of a specific threat actor and group profiling, including the place of operations, targeted countries or verticals, tools in use and the type of operations often associated with those groups</p>
              <p id='demo1'>Get a Demo <img src={arrow} className='demoArrow' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
            </div>
            <img src={ThreatActor} className='cardImg' alt='threatactor'></img>
          </div>
          <div className='threatCard3'>
            <div className='threatcar3Para'> 
              <p className='threatCard3Title'>Threat <br></br>Landscape Reports</p>
              <p className='card3Para'>Gain a more comprehensive view of the cyber threat landscape with reports focused on specific verticals that deliver an overview of the current situation and its relation to your industry</p>
              <p id='demo1'>Get a Demo <img src={arrow} className='demoArrow' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
            </div>
            <img src={ThreatLandscape} className='cardImg' alt='threatlandscape'></img>
          </div>
        </div>
        <div className='heard'>
            <div className='securityIssues'>
                <div className='securityText'>
                <p id='titleIssues'>Heard enough? See it for yourself.</p>
                <p id='textIssues'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
                </div>
                <button className='certificateButton' onClick={() => setButtonPopup(true)}>Get a Demo </button>
            </div>
        </div>
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

export default Ddoscyber

// import cyberData from '../../content/cyberData.json'
// function Ddoscyber() {
//   const [buttonPopup, setButtonPopup] =useState(false);
//   return (
//     <>
//     <div>
//       {cyberData.map (item => {
//         return <div> 
//     <div>
//     <div className='cyberBannerImg'>
//         <p className='cyberTitle1'><span className='colorText'>{item.cyberTitle1}</span> {item.cyberTitle2}<br></br>{item.cyberTitle3}</p>
//           <div className='cyberTitleFlex'>
//          {item.flex.map (item => {
//           return <div className='Arrow'>
//               <img src={item.log} alt='arrow' className='arrowLogo'></img>
//               <p id='arrow'>{item.iconTitle}<br></br>{item.iconTit}</p>
//               </div>
//             })}
//           </div>
//       </div>
//       <div className='cyberBanner2'>
//         <p className='cyberBanner2Par'>{item.cyberPara}</p>
//       </div>
//     </div>
      
//       <div className='cardsCyber'>
//        <div className='cyberCards'>
//        {item.cyberCard.map (item => {
//       return<div className='strategicCard1'>

//            <div className='strategicPara'> 
//               <p className='strategicCard1Title'>{item.cardTitle}<br></br>{item.cardTit}</p>
//               <p className='card1Para'>{item.cardPara}</p>
//               <p id='demo1'>{item.cardcont}<img src={item.cardContImg} className='demoArrow' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
//             </div>
//             <img src={item.cardImg} className='cardImg' alt='rocket'></img>

//           </div>
//         })}
//         </div>
//         <div className='heard'>
//             <div className='securityIssues'>
//                 <div className='securityText'>
//                 <p id='titleIssues'>{item.cardTitle}</p>
//                 <p id='textIssues'>{item.cardPara}</p>
//                 </div>
//                 <button className='certificateButton' onClick={() => setButtonPopup(true)}>{item.cardBtn}</button>
//             </div>
//         </div>
//       </div>
      
//       </div>
//       })}
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
//         </>
//   )
// }

// export default Ddoscyber