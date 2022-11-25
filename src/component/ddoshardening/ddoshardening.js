import React from 'react'
import { useState } from 'react'
import Bgimg1 from '../../images/ddos/Bgimg1.png'
import Bgimg2 from '../../images/ddos/Bgimg2.png'
import arrow from '../../images/attacker/Arrow.png'
import Popup from '../getdemo/getdemo'
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
          <div className='ddosSection1'>
            <p className='ddosTitle'>Improve your <span className='colorText'>network architecture </span> against attacks</p>
            <p className='ddosDesc'>We identify which protection component will preven t each DDoS attack vector</p>
            <button className='demobtn1'><b id='dembtn' onClick={() => setButtonPopup(true)}>Enquire Now</b></button>
          </div>
          <div className='netwrokArchitecture'>
              <p className='netArch'>Network Architecture</p>
              <p className='section2Content'>Our experts audit your DDoS network architecture infrastructure to identify weaknessess nd provide recommendations for maximizing DDoS protection. This step, taken regardless of which vendor you use, ensures a solid foundation for DDoS protection, with the right components in the right locations.</p>
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
              <p id='demo1'>Enquire Now <img src={arrow} className='demoArrow' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
          </div>
          <div className='vendorSelction'>
              <p id='vendorSelec'>Vendor Selection</p>
              <p id='vendorSelecPara'>An optional Red Button service includes methodical vendor evaluation, using a comprehensive RFP template. We then present our recommendations regarding several DDoS vendors with solutions most suitable for your needs, analyzing the pros and cons of each option.</p>
              <p id='demo2'>Enquire Now <img src={arrow} className='demoArrow' alt='arrow'  onClick={() => setButtonPopup(true)}/></p>
          </div>
        </div>  

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
        <p id='joinourTeam'>Join our team</p>
        <input className='Fname' type="text" placeholder='Name*'></input>
        <input className='Femail' type="text" placeholder='Email*'></input>
        <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
        <button className='Fbutton'>Submit</button>    
       </Popup>
       </>
  )
}

export default Ddos