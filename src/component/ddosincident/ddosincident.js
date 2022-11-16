import React from 'react'
import './ddosincident.css'
import Ddosincident from '../../images/ddosincident/ddosincident.png'
import Playbook from '../../images/ddosincident/playbook.png'
import Expertassign from '../../images/ddosincident/expertassign.png'
import Systemhard from '../../images/ddosincident/systemhard.png'

import './laptop.css'

export default function
  () {
  return (
    <div>
      <div className='ddosIncidentBanner'>
        <p className='bannerTitle1'>Stop DDoS attacks<br></br>
          <span className='bannertitle2'>Minimize outage time</span></p>
        <p className='ddosIncidentPara'>Our DDoS expert team offer the most up-to-date knowledge on DDoS attack trends, field-tested best practices, proficiency with all DDoS mitigation technology vendors,and extensive know-how to efficiently manage what is often a stressful event.</p>
        <button className='dembtn'><p className='demopara'>Get a demo</p></button>

      </div>
      <div className='ddosIncidentBanner2'>
        <p className='ddosIncidentBannerTitle2'><span className='colorText'>30-day DDoS incident response</span><br></br> service includes</p>
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
      <div className='ddosIncidentBanner4'>
        <div className='ddosIncidentBanner4Card'>
          <div className='ddosIncidentBanner4Card1'>
            <div className='ddosIncidentBanner4BannerLeft'>
              <img src={Expertassign} className='Banner4Img1' alt='Expertassign'></img>
            </div>
            <div className='ddosIncidentBanner4BannerRight'>
              <p className='ddosIncidentCardTitle'>Immediate DDoS Expert Assignment</p>
              <p className='ddosIncidentCardPara'>Our top DDoS response experts are immediately assigned to your incident. They analyze the attack and apply the appropriate measures until the attack has been fully mitigated</p>
            </div>
          </div>
          <div className='ddosIncidentBanner4Card1'>
            <div className='ddosIncidentBanner4BannerLeft'>
              <img src={Playbook} className='Banner4Img2' alt='Playbook'></img>
            </div>
            <div className='ddosIncidentBanner4BannerRight'>
              <p className='ddosIncidentCardTitle'>Testing and System Hardening</p>
              <p className='ddosIncidentCardPara'> We audit your network architecture and DDoS protection system configuration, run a DDoS test, and provide detailed recommendations to prevent future attacks</p>
            </div>
          </div>
          <div className='ddosIncidentBanner4Card1'>
            <div className='ddosIncidentBanner4BannerLeft'>
              <img src={Systemhard} className='Banner4Img3' alt='Systemhard'></img>
            </div>
            <div className='ddosIncidentBanner4BannerRight'>
              <p className='ddosIncidentCardTitle'>Training and DDoS Attack Playbook</p>
              <p className='ddosIncidentCardPara'> We conduct DDoS training to increase your teams' skills, and provide a DDoS Playbook with
                procedures and activities for responding to any future attacks</p>
            </div>
          </div>
        </div>

        <div className='ddosIncidentSection4'>
          <p className='ddosIncidentSection4Title'> Mitigating a DDoS Attack</p>
          <div className='ddosIncidentSection4Flex'>
              <div className='verticleLine'>
                <p className='incidentTitle'>Stop the attack</p>
                <p className='incidentPara'> Our DDoS experts work closely with your security and IT teams to deliver the fastest attack mitigation</p>
              </div>
              <div className='verticleLine'>
                <p className='incidentTitle'>Prepare for the next strike</p>
                <p className='incidentPara1'>We harden the assets that are most likely to be attacked and run tests to uncover vulnerabilities</p>
              </div>
          </div>
        </div>

        <div className='heard'>
            <div className='securityIssues'>
                <div className='securityText'>
                <p id='titleIssues'>Heard enough? See it for yourself.</p>
                <p id='textIssues'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
                </div>
                <button className='certificateButton'>Get a demo</button>
            </div>
        </div>

      </div>
    </div>
  )
}
