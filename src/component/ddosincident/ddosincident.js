import React from 'react'
import './ddosincident.css'
import Ddosincident from '../../images/ddosincident/ddosincident.png'
export default function 
() {
  return (
    <div>
        <div className='ddosIncidentBanner'>
            <p className='bannerTitle1'>Stop DDoS attacks<br></br>
            <span className='bannertitle2'>Minimize outage time</span></p>
            <p className='ddosIncidentPara'>Our DDoS expert team offer the most up-to-date knowledge on DDoS attack trends, field-tested best practices, proficiency with all DDoS mitigation technology vendors,and extensive know-how to efficiently manage what is often a stressful event.</p>
            <button  className='dembtn'><p className='demopara'>Get a demo</p></button>
            
        </div>
        <div className='ddosIncidentBanner2'>
        <p className='ddosIncidentBannerTitle2'><span  className='colorText'>30-day DDoS incident response</span><br></br> service includes</p>
        <p className='serviceIncludesPara'>We offer the most up-to-date knowledge on DDoS attack trends, field-tested best practices, proficiency with all DDoS mitigation technology vendors,and extensive know-how to efficiently manage what is often a stressful event.</p>
        </div>

        <div className='ddosIncidentBanner3'>
            <div className='ddosIncidentFlex'>
                <div className='ddosIncidentFlexContent'>
                        <p className='ddosIncidentFlexTitle'>Understanding the Theory Behind Incident Response</p>
                        <hr></hr>
                        <p className='ddosIncidentFlexPara'>Incident response is a fundamental responsibility for any IT program. With so many potential threats lurking around every digital turn, it’s not a matter of if something will happen—but when. Although it’s nearly impossible to consider every incident scenario, implementing a comprehensive incident response plan—complete with the incident response phases—ensures that your team is ready to spring into action at a moment’s notice.</p>
                </div>
                <div className='ddosIncidentFlexImage'>
                        <img src={Ddosincident} alt='Ddosincident' className='IncidentFlexImage'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
