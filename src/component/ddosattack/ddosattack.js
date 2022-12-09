import React from 'react'
import { useState } from 'react'
import Popup from '../getdemo/getdemo'
import './style.css'
import './laptop.css'
import './tab.css'
import './mobile.css'
import vectorHrline from '../../images/virtual/vectorHrline.png'
import planingImg from '../../images/ddosattack/planingImg.png'
import controlImg from '../../images/ddosattack/controlImg.png'
import reportImg from '../../images/ddosattack/reportImg.png'
import hrline from '../../images/ddosattack/hrline.png'
import demo from "../../images/ddosattack/demoBg1.png"
function Ddosattack() {
  const [buttonPopup, setButtonPopup] =useState(false);

  return (
    <>
    <div>
      <div className='ddosattack_section1'>
        <div className='ddosattack_Title'><span className='ddoscolorText'>DDoS Attack Simulation</span> <br />& Testing</div>
        <p className="ddosattackDesc">Our testing service simulates deep multi-vector DDoS attacks.</p>
        {/* <p className="ddosattackdemoBtn " onClick={() => setButtonPopup(true)}>Enquire Now</p> */}
        <img  className='ddosdemo' src={demo} onClick={() => setButtonPopup(true)}/>
      </div>
      <div className='ddosattack_section2'>
        <div className='ddosattack_cardlist' >
          <div className='ddosattack_card'>
            <p className='ddosattack_CardTitle'> Volumetric attacks</p>
            <p className='ddosattack_CardDesc'>Generating multi-gigabit attack traffic from multiple global locations, we test your ability to withstand extreme and sustained attacks</p>
          </div>
          <div className='ddosattack_card'>
            <p className='ddosattack_CardTitle'>Application layer attacks</p>
            <p className='ddosattack_CardDesc'>We overwhelm your web server tier with excessive HTTP/S GET or POST requests that test our resistance to resource exhaustion</p>
          </div>
          <div className='ddosattack_card'>
            <p className='ddosattack_CardTitle'>Low-and- slow attacks</p>
            <p className='ddosattack_CardDesc'>Using attacks such as lowLoris, R.U.D.Y., and SSL  enegotiation, we test your ability to detect low resource attacks</p>
          </div>
        </div>
      </div>
      <div className='ddosattack_section3'>
        <div className='ddos_structure'>
          <p className='structure_title'>A Structured & Controlled Process</p>
          <p className='structure_desc'>Using a “white-box” test methodology, we analyze your entire network
            architecture and decide on the most relevant attack vectors to test</p>
        </div>
        <div className='structureList'>
          <div className='structureBlock'>
              <img className='blocksIcon' src={planingImg} alt='icons' />
            <div className='blocksPara'>
              <p className='block_title'>Planning Session</p>
              <ul className='blockList'>
                <li> Understand your network <br />architecture.</li>
                <li> Define clear goals, attack vector</li>
              </ul>
            </div>
          </div>
          <div className='structureBlock'>
            <img className='blocksIcon' src={controlImg} alt='icons' />
            <div className='blocksPara '>
              <p className='block_title'>Controlled Attack</p>
              <ul className='blockList'>
                <li>Execute tests with 6-12 attack vectors</li>
                <li>Cover all attack categories (volumetric, <br />application-layer, low and slow)</li>
              </ul>
            </div>
          </div>
          <div className='structureBlock'>
              <img className='blocksIcon' src={reportImg} alt='icons' />
            <div className='blocksPara'>
              <p className='block_title'>Report & Analysis</p>
              <ul className='blockList'>
                <li>Deliver test results.</li>
                <li>Specify vulnerabilities and<br /> reccomendations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='ddosplatform'>
          <p className='ddosplatform_title'>DDoS Attack Simulator Platform</p>
          <p className='ddosplatform_desc'>Our extensible testing platform executes DDoS attacks from bots distributed around the world. It sends real traffic using Web, DNS, and network attack vectors</p>
        </div>
      </div>
      <div className='Actionable'>
        <p className='Actionable_title'>Get Actionable Recommendations</p>
        <p className='Actionable_desc'>Following the DDoS Test, you receive a detailed report containing a full gap analysis outlining the main weaknesses, their severity, and how they should be fixed</p>
      </div>
      <div className='ddostesting'>
        <div className='ddostesting_list'>
          <div className='ddostesting_left'>
            <p className='ddostesting_awsTitle'>AWS DDoS Testing</p>
            <p className='ddostesting_aswDesc'>Make sure your AWS deployment is secure with simulated DDoS attacks in a controlled environment</p>
          </div>
          <div className='ddostesting_right'>
            <p className='ddostesting_box'>Customized Testing</p>
            <p className='ddostesting_expl'>We help AWS customers verify their DDoS protection by simulating controlled attacks, providing detailed analysis, and making specific recommendations for improvement <br /> <br />
              Our DDoS testing service, available to AWS Shield Advanced customers, is customized to match your AWS deployment architecture. So, whether you use EC2, ALB, ELB, Lamda, API Gateway or CloudFront–we’ll test the attack vectors that maximize valuefor your operational security</p>
          </div>
        </div>
        <img className='testhrline' src={vectorHrline} alt='hrilne' />
        <div className='ddostesting_list'>
          <div className='ddostesting_left'>
            <p className='ddostesting_awsTitle'>Azure DDoS Testing</p>
            <p className='ddostesting_aswDesc'>Ensure your Microsoft Azure deployment is secure with simulated DDoS attacks in a controlled environment.</p>
          </div>
          <div className='ddostesting_right1'>
            <p className='ddostesting_box'>Customized Testing</p>
            <p className='ddostesting_expl'>We help validate your DDoS protection and ensure your services or applications continue to function as expected during an attack. We provide simulated controlled DDoS attacks, accompanied by a detailed analysis, and specific recommendations for improvement. <br /> <br />
              Our DDoS testing service, available to customers with an Azure DDoS Protection Standard plan, is customized to match your Azure deployment infrastructure. So, whether you use Azure CDN, Azure Gateway, or Azure Virtual Machines–we’ll test the attack vectors to maximize the value of your testing</p>
          </div>
        </div>
      </div>
      <div className='ddosattack_section4'>
        <div className='heard'>
          <div className='securityIssues'>
            <div className='securityText'>
              <p id='titleIssues'>Heard enough? See it for yourself.</p>
              <p id='textIssues'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
            </div>
            <button className='certificateButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
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

export default Ddosattack



// import ddosattackData from '../../content/ddosattackData.json'
// function Ddosattack() {
//   const [buttonPopup, setButtonPopup] =useState(false);

//   return (
//     <div>
//       {ddosattackData.map(item => {
//         return <div>
//           <div className='ddosattack_section1'>
//             <div className='ddosattack_Title'><span className='ddoscolorText'>{item.title1}</span> <br />{item.title2}</div>
//             <p className="ddosattackDesc">{item.titleDesc}</p>
//             <p className="ddosattackdemoBtn " onClick={() => setButtonPopup(true)}>{item.demo}</p>
//           </div>

//           <div className='ddosattack_section2'>
//             <div className='ddosattack_cardlist' >
//               {item.cardList.map(item => {
//                 return <div className='ddosattack_card'>
//                   <p className='ddosattack_CardTitle'> {item.cardTitle}</p>
//                   <p className='ddosattack_CardDesc'>{item.cardDesc}</p>
//                 </div>
//               })}
//             </div>
//           </div>
//           <div className='ddosattack_section3'>
//             <div className='ddos_structure'>
//               <p className='structure_title'>{item.structureTitle}</p>
//               <p className='structure_desc'>{item.structureDesc}</p>
//             </div>
//             <div className='structureList'>
//               {item.structureList.map(item => {
//                 return <div className='structureBlock'>
//                   <div className='imageFlex'>
//                     <img className='blocksIcon' src={item.Blockicon} alt='icons' />
//                   </div>
//                   {item.dotline ? <img className='dotLine' src={item.dotline} alt='line' /> : ""}
//                   <div className='blocksPara'>
//                     <p className='block_title'>{item.BlockTitle}</p>
//                     <ul className='blockList'>
//                       <li>{item.BlockDesc1}</li>
//                       <li>{item.BlockDesc2}</li>
//                     </ul>
//                   </div>
//                 </div>
//               })}
//             </div>
//             <div className='ddosplatform'>
//               <p className='ddosplatform_title'>{item.platformTitle}</p>
//               <p className='ddosplatform_desc'>{item.platformDesc}</p>
//             </div>
//           </div>
//           <div className='Actionable'>
//             <p className='Actionable_title'>{item.actionTitle}</p>
//             <p className='Actionable_desc'>{item.ationDesc1}</p>
//           </div>
//           <div className='ddostesting'>
//             {item.testingList.map(item => {
//               return <div>
//                 <div className='ddostesting_list'>
//                   <div className='ddostesting_left'>
//                     <p className='ddostesting_awsTitle'>{item.testingTitle}</p>
//                     <p className='ddostesting_aswDesc'>{item.testingDesc}</p>
//                   </div>
//                   <div className='ddostesting_right'>
//                     <p className='ddostesting_box'>{item.testBox}</p>
//                     <p className='ddostesting_expl'>{item.testingexplain}</p>
//                   </div>
//                 </div>
//                 {item.testhrline ? <img className='testhrline' src={item.testhrline} alt='line' /> : ""}
//               </div>
//             })}
//           </div>
//           <div className='ddosattack_section4'>
//             <div className='heard'>
//               <div className='securityIssues'>
//                 <div className='securityText'>
//                   <p id='titleIssues'>{item.hearTitle}</p>
//                   <p id='textIssues'>{item.heardDesc}</p>
//                 </div>
//                 <button className='certificateButton' onClick={() => setButtonPopup(true)}>{item.heardBtn}</button>
//               </div>

//             </div>
//           </div>
//         </div>
//       })}
// <Popup trigger ={buttonPopup} setTrigger ={setButtonPopup}>
//       <p id='getintouch'>Get in touch with us </p>
//       <input className='Fname' type="text" placeholder='Name*'></input>
//       <input className='Femail' type="text" placeholder='Email*'></input>
//       <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
//       <button className='Fbutton'>Submit</button>    
//      </Popup>
//     </div>
//   )
// }


// export default Ddosattack;