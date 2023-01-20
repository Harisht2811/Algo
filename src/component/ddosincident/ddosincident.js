import React from 'react'
import './ddosincident.css'
import Ddosincident from '../../images/ddosincident/ddosincident.png'
import Playbook from '../../images/ddosincident/playbook.png'
import Expertassign from '../../images/ddosincident/expertassign.png'
import Systemhard from '../../images/ddosincident/systemhard.png'
import Popup from '../getdemo/getdemo'
import { useState } from 'react'
import whiteArow from '../../images/homepage/algohome28.png'

import './laptop.css'
import './tab.css'
import './mob.css'
import './mobile.css'
// import './monitor.css'

export default function
  () {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div>
        <div className='ddosIncidentBanner'>
          <div>
            <p className='bannerTitle1'>Stop DDoS attacks<br /><span className='bannercolortext'>Minimize outage time</span></p>
          </div>
          <div className='ddosIncidentBannerright'>
            <button className='dembtn'><p className='demopara' onClick={() => setButtonPopup(true)}>Get help now &nbsp; <img src={whiteArow} alt='arrowimg' /></p></button>
            <p className='ddosIncidentPara'>Our DDoS expert team offer the most up-to-date knowledge on DDoS attack trends, field-tested best practices, proficiency with all DDoS mitigation technology vendors, and extensive know-how to efficiently manage what is often a stressful event.</p>
          </div>
        </div>
        <div className='ddosincisection2'>
        <div className='ddosIncidentBanner4'>
          <div className='ddosIncidentBanner4list'>
            <p className='ddosIncidentCardNumber'>01</p>
            <p className='ddosIncidentCardTitle'>Immediate DDoS Expert Assignment</p>
            <p className='ddosIncidentCardPara'>Our top DDoS response experts are immediately assigned to your incident. They analyze the attack and apply the appropriate measures until the attack has been fully mitigated.</p>
          </div>
          <div className='ddosIncidentBanner4list'>
            <p className='ddosIncidentCardNumber'>02</p>
            <p className='ddosIncidentCardTitle'>Testing and System Hardening</p>
            <p className='ddosIncidentCardPara'> We audit your network architecture and DDoS protection system configuration, run a DDoS test, and provide detailed recommendations to prevent future attacks.</p>
          </div>
          <div className='ddosIncidentBanner4list'>
            <p className='ddosIncidentCardNumber'>03</p>
            <p className='ddosIncidentCardTitle'>Training and DDoS Attack Playbook</p>
            <p className='ddosIncidentCardPara'> We conduct DDoS training to increase your teams' skills, and provide a DDoS Playbook with procedures and activities for responding to any future attacks.</p>
          </div>
        </div>
        <div className='ddosIncidentSection4'>
          <p className='ddosIncidentSection4Title'> Mitigating a DDoS Attack</p>
          <div className='ddosIncidentSection4Flex'>
            <div className='verticleLine'>
              <p className='incidentTitle'>Stop the attack</p>
              <p className='incidentPara'> Our DDoS experts work closely with your security and IT teams to deliver the fastest attack mitigation.</p>
            </div>
            <div className='verticleLine'>
              <p className='incidentTitle'>Prepare for the next strike</p>
              <p className='incidentPara'>We harden the assets that are most likely to be attacked and run tests to uncover vulnerabilities.</p>
            </div>
          </div>
        </div>
        <div className='ddosIncidentBanner3'>
          <div className='ddosIncidentFlex'>
            <div className='ddosIncidentFlexContent'>
              <p className='ddosIncidentFlexTitle'>Understanding the Theory Behind Incident Response</p>
              <hr className='ddosincidenthr'></hr>
              <p className='ddosIncidentFlexPara'>Incident response is a fundamental responsibility for any IT program. With so many potential threats lurking around every digital turn, it’s not a matter of if something will happen—but when. Although it’s nearly impossible to consider every incident scenario, implementing a comprehensive incident response plan—complete with the incident response phases—ensures that your team is ready to spring into action at a moment’s notice.</p>
            </div>
            <div className='ddosIncidentFlexImage'>
              <img src={Ddosincident} alt='Ddosincident' className='IncidentFlexImage'></img>
            </div>
          </div>
        </div>
        </div>
       

      </div>
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

// import ddosincident from '../../content/ddosincident.json'
// export default function
//   () {
//   const [buttonPopup, setButtonPopup] = useState(false);

//   return (
//     <>
//       {ddosincident.map(item => {
//         return <div>
//           <div className='ddosIncidentBanner'>
//             <p className='bannerTitle1'>{item.title}<br></br><span className='bannertitle2'>{item.title1}</span></p>
//             <p className='ddosIncidentPara'>{item.titleDesc}</p>
//             <button className='dembtn'><p className='demopara' onClick={() => setButtonPopup(true)}>{item.demo}</p></button>

//           </div>
//           <div className='ddosIncidentBanner2'>
//             <p className='ddosIncidentBannerTitle2'><span className='colorText'>{item.incidenttitle}</span><br></br>{item.incidenttitle1}</p>
//             <p className='serviceIncludesPara'>{item.incidentdesc}</p>
//           </div>

//           <div className='ddosIncidentBanner3'>
//             <div className='ddosIncidentFlex'>
//               <div className='ddosIncidentFlexContent'>
//                 <p className='ddosIncidentFlexTitle'>{item.responseTitle}</p>
//                 <hr className='ddosincidenthr'></hr>
//                 <p className='ddosIncidentFlexPara'>{item.responsedesc}</p>
//               </div>
//               <div className='ddosIncidentFlexImage'>
//                 <img src={item.responseImg} alt='Ddosincident' className='IncidentFlexImage'></img>
//               </div>
//             </div>
//           </div>
//           <div className='ddosIncidentBanner4'>
//             <div className='ddosIncidentBanner4Card'>
//             {item.cardlist.map(item => {
//               return <div className='ddosIncidentBanner4Card1'>
//                 <div className='ddosIncidentBanner4BannerLeft'>
//                   <img src={item.cardicon} className='Banner4Img1' alt='Expertassign'></img>
//                 </div>
//                 <div className='ddosIncidentBanner4BannerRight1'>
//                   <p className='ddosIncidentCardTitle'>{item.cardTitle}</p>
//                   <p className='ddosIncidentCardPara1'>{item.carddesc}</p>
//                 </div>
//               </div>
//             })}
//             </div>

//             <div className='ddosIncidentSection4'>
//               <p className='ddosIncidentSection4Title'>{item.mitigattitle}</p>
//               <div className='ddosIncidentSection4Flex'>
//               {item.mitigatlist.map(item => {
//               return <div className='verticleLine'>
//                   <p className='incidentTitle'>{item.listtitel}</p>
//                   <p className='incidentPara'>{item.listdesc}</p>
//                 </div>
//               })}
//               </div>
//             </div>

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