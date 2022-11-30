import React from 'react'
import '../footer/footer.css'

import { Link } from 'gatsby'

import algofooter from '../../../images/homepage/algohome29.png'
import socialIcon1 from '../../../images/homepage/algohome24.png'
import socialIcon2 from '../../../images/homepage/algohome25.png'
import socialIcon3 from '../../../images/homepage/algohome26.png'
import socialIcon4 from '../../../images/homepage/algohome27.png'
import { color } from '@mui/system'

function footer() {
    return (
        <>
            <div className='algofooter'>
                <div className='section1'>
                    <img className='footericon' src={algofooter} alt='footericon'></img>
                    <p id='titlefooterText1'>Follow us on</p>
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
                <Link to='/'><p id='footerText'>Home</p></Link> 
                <Link to='/aboutus'><p id='footerText'>About us</p></Link> 
                </div>
                <div className='section3'>
                <p id='titlefooterText'>Services</p>
                <Link to='/thirdparty'><p id='footerText'>3rd Party Cyber Risk</p></Link> 
                <Link to='/attacksurface'><p id='footerText'>Attack Surface</p></Link> 
                <Link to='/ddosattack'><p id='footerText'>DDoS Attack Simulation & Testing</p></Link>
                <p id='footerText'></p>
                <Link to='/ddosincident'><p id='footerText'>DDOS Incident Response</p></Link>
                <Link to='/ddoshardening'><p id='footerText'>Technology Hardening</p></Link>
                <Link to='/deepdark'><p id='footerText'>Deep & Dark Web</p></Link>
                </div>
                <div className='section4'>
                <p id='titlefooterText' style={{color:'transparent'}}>Services</p>
                <Link to='/ddoscyber'><p id='footerText'>Deep Cyber Investigations</p></Link>
                <Link to='/pentesting'><p id='footerText'>Pentesting</p></Link>
                <Link to='/phishing'><p id='footerText'>Phishing Detection</p></Link>
                <Link to='/virtualhumint'><p id='footerText'>Virtual Humint Operations</p></Link>
                <Link to='/ransomware'><p id='footerText'>Ransomeware</p></Link>
                </div>
            </div>

            <div className='algofooterRes'>
                <div className='section2'>
                    <p id='titlefooterText'>Quick Links</p>
                    <p id='footerText'>Home</p>
                    <p id='footerText'>About us</p>
                </div>
                <div className='resFlex'>
                    <div className='section3'>
                        <p id='titlefooterText'>Services</p>
                        <Link to='/thirdparty'><p id='footerText'>3rd Party Cyber Risk</p></Link>
                        <Link to='/attacksurface'><p id='footerText'>Attack Surface</p></Link>
                        <Link to='/ddosattack'><p id='footerText'>DDoS Attack Simulation & Testing</p></Link>
                        <p id='footerText'>DDOS Incident Response</p>
                        <p id='footerText'>Technology Hardening</p>
                        <Link to='/deepdark'><p id='footerText'>Deep & Dark Web</p></Link>
                    </div>
                    <div className='section4'>
                        <p id='titlefooterText1' style={typeof window != 'undefined' && window.innerWidth < 768 ? { display: 'none' } : { color: 'transparent' }}>Services</p>
                        <p id='footerText'>Deep Cyber Investigations</p>
                        <Link to='/pentesting'><p id='footerText'>Pentesting</p></Link>
                        <Link to='/phishing'><p id='footerText'>Phishing Detection</p></Link>
                        <Link to='/virtualhumint'><p id='footerText'>Virtual Humint Operations</p></Link>
                        <Link to='/ransomware'><p id='footerText'>Ransomeware</p></Link>
                    </div>
                </div>
                <img className='footericon' src={algofooter} alt='footericon'></img>
                <div className='section1'>
                    <p id='titlefooterText1'>Follow us on</p>
                    <div className='socialIcons'>
                        <img id='socialIcon1' src={socialIcon1} alt='socialIcon1'></img>
                        <img id='socialIcon2' src={socialIcon2} alt='socialIcon2'></img>
                        <img id='socialIcon3' src={socialIcon3} alt='socialIcon3'></img>
                        <img id='socialIcon4' src={socialIcon4} alt='socialIcon4'></img>
                    </div>
                    <p id='copyrightText'>Copyright @algoritmik 2022. All right reserved</p>
                </div>

            </div>
        </>
    )
}

export default footer            