import React from 'react'
import '../footer/footer.css'

import { Link } from 'gatsby'

import footerData from "../../../content/footerData.json"

import algofooter from '../../../images/homepage/algohome29.png'
import socialIcon1 from '../../../images/homepage/algohome24.png'
import socialIcon2 from '../../../images/homepage/algohome25.png'
import socialIcon3 from '../../../images/homepage/algohome26.png'
import socialIcon4 from '../../../images/homepage/algohome27.png'
import { color } from '@mui/system'
import { NavItem } from 'react-bootstrap'

function footer() {
    console.log(footerData)
    return (
        <>
            <div className='algofooter'>
                <div className='section1'>
                    <img className='footericon' src={algofooter} alt='footericon'></img>
                    <p id='titlefooterText1'>Follow us on</p>
                    <div className='socialIcons'>
                        {/* <img id='socialIcon1' src={socialIcon1} alt='socialIcon1'></img> */}
                        <img id='socialIcon2' src={socialIcon2} alt='socialIcon2'></img>
                        <img id='socialIcon3' src={socialIcon3} alt='socialIcon3'></img>
                        {/* <img id='socialIcon4' src={socialIcon4} alt='socialIcon4'></img> */}
                    </div>
                    <p id='copyrightText'>Copyright @algoritmik 2022. All right reserved</p>
                </div>
                <div className='section2'>
                    <p id='titlefooterText'>Quick Links</p>
                    <Link to='/'><p id='footerText'>Home</p></Link>
                    <Link to='/aboutusNew'><p id='footerText'>About us</p></Link>
                    <Link to='/contactus'><p id='footerText'>Contact us</p></Link>
                </div>
                <div className='section3'>
                    <p id='titlefooterText'>Services</p>
                    <Link to='/ransomware'><p id='footerText'>Ransomware</p></Link>
                    <Link to='/drp'><p id='footerText'>Digital Risk Protection</p></Link>
                    <Link to='/ddosattack'><p id='footerText'>DDoS Attack Simulation & Technology Hardening</p></Link>
                    <p id='footerText'></p>
                    <Link to='/ddosincident'><p id='footerText'>DDos Incident Response</p></Link>
                    <Link to='/pentesting'><p id='footerText'>Pentesting</p></Link>
                </div>
            </div>

            <div className='algofooterRes'>
                <div className='section2'>
                    <p id='titlefooterText'>Quick Links</p>
                    <Link to='/'><p id='footerText'>Home</p></Link>
                    <Link to='/aboutusNew'><p id='footerText'>About us</p></Link>
                    <Link to='/contactus'><p id='footerText'>Contact us</p></Link>
                </div>
                <div className='resFlex'>
                    <div className='section3'>
                        <p id='titlefooterText'>Services</p>
                        <Link to='/ransomware'><p id='footerText'>Ransomware</p></Link>
                        <Link to='/drp'><p id='footerText'>Digital Risk Protection</p></Link>
                        <Link to='/ddosattack'><p id='footerText'>DDoS Attack Simulation & Technology Hardening</p></Link>
                        <p id='footerText'></p>
                        <Link to='/ddosincident'><p id='footerText'>DDos Incident Response</p></Link>
                        <Link to='/pentesting'><p id='footerText'>Pentesting</p></Link>
                    </div>
                </div>
                <img className='footericon' src={algofooter} alt='footericon'></img>
                <div className='section1'>
                    <p id='titlefooterText1'>Follow us on</p>
                    <div className='socialIcons'>
                        <img id='socialIcon2' src={socialIcon2} alt='socialIcon2'></img>
                        <img id='socialIcon3' src={socialIcon3} alt='socialIcon3'></img>
                    </div>
                    <p id='copyrightText'>Copyright @algoritmik 2022. All right reserved</p>
                </div>

            </div>

        </>
    )
}

export default footer