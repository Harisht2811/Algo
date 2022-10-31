import React from 'react'
import '../footer/footer.css'

import { Link } from 'gatsby'

import algofooter from '../../../images/homepage/algohome29.png'
import socialIcon1 from '../../../images/homepage/algohome24.png'
import socialIcon2 from '../../../images/homepage/algohome25.png'
import socialIcon3 from '../../../images/homepage/algohome26.png'
import socialIcon4 from '../../../images/homepage/algohome27.png'

function footer() {
    return (
        <>
            <div className='algofooter'>
                <div className='section1'>
                 <img className='footericon' src={algofooter} alt='footericon'></img>
                  <p id='titlefooterText'>Follow us on</p>
                 <div className='socialIcons'>
                  <img id='socialIcon1' src={socialIcon1} alt='socialIcon1'></img>
                  <img id='socialIcon2' src={socialIcon2} alt='socialIcon2'></img>
                  <img id='socialIcon3' src={socialIcon3} alt='socialIcon3'></img>
                  <img id='socialIcon4' src={socialIcon4} alt='socialIcon4'></img>
                 </div>
                 <p id='copyrightText'>Copyright @algoritmik 2022. All right reserved</p>
                </div>
                <div className='section2'>
                <p id='titlefooterText'>Quick Links</p>
                 <p id='footerText'>Home</p>
                 <p id='footerText'>About us</p>


                </div>
                <div className='section3'>
                <p id='titlefooterText'>Services</p>
                <Link to='/attacksurface'><p id='footerText'>3rd Party Cyber Risk</p></Link> 
                <Link to='/thirdparty'><p id='footerText'>Attack Surface</p></Link> 
                <p id='footerText'>DDoS Attack Simulation & Testing</p>
                <p id='footerText'>DDOS Incident Response</p>
                <p id='footerText'>Technology Hardening</p>
                <p id='footerText'>Deep & Dark Web</p>


                </div>
                <div className='section4'>
                <p id='footerText'>Deep Cyber Investigations</p>
                <p id='footerText'>Pentesting</p>
                <p id='footerText'>Phishing Detection</p>
                <p id='footerText'>Virtual Humint Operations</p>
                <p id='footerText'>Ransomeware</p>

                </div>
            </div>
        </>
    )
}

export default footer