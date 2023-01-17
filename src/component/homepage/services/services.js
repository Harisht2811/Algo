import React from 'react'
import { Link } from 'gatsby'
import '../services/services.css'

import Arrowimage from '../../../images/homepage/algohome30.svg'
import whiteArow from '../../../images/homepage/algohome28.png'

function services() {
  return (
    <>
      <div className='algoservices'>
        <p id='servicesText'>Other Services</p>
        <div className='seviceblocklist'>
        <div className='innerCards1'>
            <p id='servCardTitletext'>Anti- <br/>Ransomware</p>
            <p id='servCardText'>Self-learning AI, Anti-Malware and Anti-Ransomware technologies with redundant back-up systems to identify and mitigate advanced threats</p>
            <Link to='/ransomware'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
          </div>
          <div className='innerCards2'>
            <p id='servCardTitletext'>Advanced <br/> Penetration Testing</p>
            <p id='servCardText'>Intelligence-driven technologies deployed to identify and help mitigate vulnerabilities in your digital defenses.</p>
            <Link to='/ddosincident'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
          </div>
          <div className='innerCards3'>
            <p id='servCardTitletext'>DDoS Attack <br/> Simulation + Testing</p>
            <p id='servCardText'>Algoritmik analyzes your network architecture to help you identify the most relevant attack vectors to test.</p>
            <Link to='/ddosattack'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
          </div>
          <div className='innerCards4'>
            <p id='servCardTitletext'>Digital Risk <br/> Protection</p>
            <p id='servCardText'>Comprehensive, military-grade platform for the digital age to prevent attacks, phishing and data breaches on a global scale.</p>
            <Link to='/drp'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default services

// import serviceData from "../../../content/otherservicesData.json"
// function Services() {
//   return (
//   <>
//    {serviceData.map((item,index) =>{
//     return <div className='algoservices' key={index}>
//     <p id='servicesText'>{item.otherServicesTitle}</p>
//     <div className='servicesCard'>
//         {item.otherServicessub.map((item,index) =>{
//           return <div className='innercard' key={index}>
//           <div className='textCards'>
//             <p id='cardText'>{item.service1}</p>
//             <Link to='/'><img className='arrowImg' src={Arrowimage} alt='arrowImage'></img></Link>
//           </div>
//           <p id='belowcardText'>{item.servicesDesc}</p>
//         </div>
//    })}
//     </div>
//    </div>
//   })}

//    </>
//   )
// }

// export default Services