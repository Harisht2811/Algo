import React from 'react'
import { useState } from 'react'
import Bgimg1 from '../../images/ddos/Bgimg1.png'
import Bgimg2 from '../../images/ddos/Bgimg2.png'
import arrow from '../../images/attacker/Arrow.png'
import Popup from '../getdemo/getdemo'
import hardeningim1 from '../../images/ddos/hardeningim1.png'
import hardeningim2 from '../../images/ddos/hardeningim2.png'
import './ddoshardening.css'
import './laptop.css'
import './tab.css'
import './mobile.css'
import './mobscrenn.css'
import './desktop.css'


function Ddos() {
  const [buttonPopup, setButtonPopup] =useState(false);
  return (
    <>
    <div>
        <div className='ddosBanner'>
          <div className='ddosbanflex'>
          <div className='ddosSection1'>
            <p className='ddosTitle'>Improve your <span className='colorText'><br></br>network architecture </span>against attacks</p>
            <p className='ddosDesc'>We identify which protection component will prevent each DDoS attack vector</p>
            <button className='demobtn1'><b id='dembtn' onClick={() => setButtonPopup(true)}>Get a Demo</b></button> 
          </div>
          <div className='hardenimg'>
          <img src={hardeningim1} alt="hardeningim1"></img>
          </div>
          </div>
          
          <div className='netwrokArchitecture'>
              <p className='netArch'>Network Architecture</p>
              <p className='section2Content'>Our experts audit your DDoS network architecture infrastructure to identify weaknessess nd provide recommendations for maximizing DDoS protection. This step, taken regardless of which vendor you use, ensures a solid foundation for DDoS protection, with the right components in the right locations.</p>
          </div>
          <div className='hardeningim2'>
          <img src = {hardeningim2} alt ="hardeningim2"></img>
        </div>
        </div>
        
        <div className='attackVectorAnalysis'>
            <div className='bgimg'>
              <p id ="attackVector">Attack Vector Analysis</p>
              <p id="attackVectorPara">We identify which protection component will prevent each DDoS attack vector.</p>
              <img src={Bgimg2} className="section2Img" alt='bgimg'></img>
            </div>
        <div className='section4Flex'>  
          <div className='configOptimiz'>
              <p id='config'>Configuration Optimization</p>
              <p id='configPara'>Installed DDoS protection solutions are often underutilized. Our team dives into your protection setup and provides detailed instructions on how to improve appliance configuration. For example, we ensure that rate limit thresholds are well-calibrated, that you have chosen the most appropriate web challenge, and that you fully utilize bot and geo-protection.</p>
              <p id='demo3'>Get a Demo <img src={arrow} className='demoArrow' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
          </div>
          <div className='vendorSelction'>
              <p id='vendorSelec'>Vendor Selection</p>
              <p id='vendorSelecPara'>An optional Red Button service includes methodical vendor evaluation, using a comprehensive RFP template. We then present our recommendations regarding several DDoS vendors with solutions most suitable for your needs, analyzing the pros and cons of each option.</p>
              <p id='demo2'>Get a Demo <img src={arrow} className='demoArrow' alt='arrow'  onClick={() => setButtonPopup(true)}/></p>
          </div>
        </div>  

        {/* <div className='heard'>
            <div className='securityIssues'>
                <div className='securityText'>
                <p id='titleIssues'>Heard enough? See it for yourself.</p>
                <p id='textIssues'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
                </div>
                <button className='certificateButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
            </div>
        </div> */}
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

export default Ddos

// import hardeningData from '../../content/hardeningData.json'

// function Ddos() {
//   const [buttonPopup, setButtonPopup] =useState(false);
//   return (

//     <>
//     <div>
//     {hardeningData.map (item => {
//       return <div> 
//         <div className='ddosBanner'>
//           <div className='ddosSection1'>
//             <p className='ddosTitle'>{item.title} <span className='colorText'>{item.title1} </span>{item.title2}</p>
//             <p className='ddosDesc'>{item.titlePara}</p>
//             <button className='demobtn1'><b id='dembtn' onClick={() => setButtonPopup(true)}>{item.titleBtn}</b></button>
//           </div>
//           <div className='netwrokArchitecture'>
//               <p className='netArch'>{item.secondTitle}</p>
//               <p className='section2Content'>{item.secondPara}</p>
//           </div>
//         </div>

       
//         <div className='attackVectorAnalysis'>
//             <div className='bgimg'>
//               <p id ="attackVector">{item.thirdTitle}</p>
//               <p id="attackVectorPara">{item.thirdPara}</p>
//               <img src={item.thirdImg} className="section2Img" alt='bgimg'></img>
//             </div>
//         <div className='section4Flex'>
//         {item.hardeningFlex.map (item => {
//       return <div className='configOptimiz'>
//               <p id='config'>{item.title}</p>
//               <p id='configPara'>{item.description}</p>
//               <p id='demo1'>{item.btn} <img src={arrow} className='demoArrow' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
//           </div>
//        })}
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
//        })}
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
//        </>
//   )
// }

// export default Ddos