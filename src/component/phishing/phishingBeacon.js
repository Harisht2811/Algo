import React from 'react'
import './style.css'
import './laptop.css'
import './tab.css'
import './mobile.css'
import arrowG from '../../images/deepdark/Arrowgreen.png'
import hrline from '../../images/deepdark/hrline.png'
import phishingLogo from '../../images/phishing/phishingLogo.png'
import phishingimg from '../../images/phishing/phishingimg.png'
import newBg from '../../images/phishing/newBg.png'
function phishingBeacon() {
    return (
        <div>
            <div className='phishing_section1'>
                <div className='phishing_Title'>Proactively Detect <br /> <span className='colorText'>Phishing Threats</span></div>
                <p className="phishingDesc">Understand your organization’s security health and demonstrate real return on investment with intuitive dashboard results on-demand.</p>
                <p className="phishingDemoBtn ">Get a Demo</p>
            </div>
            <div className='phishing_section2'>
                <p className='phishing_section2Title'>Each year phishing attacks are becoming increasingly sophisticated. Today, threat actors spend months planning their phishing attacks and launch phishing scams directly targeting a specific organization, including both its customers and employees. The potential damage of a successful phishing attack to your organization is widespread, impacting your security operations and brand reputation, in addition to your data privacy and compliance.</p>
            </div>
            <div className='phishing_section3'>
                <p className='phishing_section3_title'>Algoritmik services on </p>
                <img src={hrline} className='phishing_hrline' />
                <div className='phishing_CardList'>
                    <div className='phishingCard'>
                        <p className='phishingCard_title'>Detect and analyze<br /> threats in advance</p>
                        <p className='phishingCard_desc'>Monitor active look alike domains and websites impersonating your brand as well as phishing kits reused by threat actors. Detect attacks against employees by spotting phishing target lists, email templates used in an attack, and other exposed data. Identify these and other threats to get early warning of ongoing and future phishing campaigns</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>
                    </div>
                    <div className='phishingCard'>
                        <p className='phishingCard_title'>Get <br />actionable alerts</p>
                        <p className='phishingCard_desc'> Act on alerts that can lead to the most immediate action, such as phishing websites that have not yet been launched. Integrate these structured alerts via AP, SOAR or ticketing platforms. Act on alerts that can lead to the most immediate action, such as phishing websites that have not yet been launched. Integrate these structured alerts via AP, SOAR or ticketing platforms</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>
                    </div>
                </div>
                <div className='phishing_card3'>
                    <p className='phishing_card3_title'>Remediate<br />and takedown threats</p>
                    <p className='phishing_card3_Desc'>Initiate a take down process which involves notifying the relevant providers to remove the misleading content, block domains, and update public blacklists . Get detailed reports on each detected alert, including related IOCs, screenshots and recommendationsInitiate a take down process which involves notifying the relevant providers to remove the misleading content, block domains, and update public blacklists . Get detailed reports on each detected alert, including related IOCs, screenshots and recommendations</p>
                    <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>
                </div>
            </div>
            <div className='phishing_section4'>
                <div className='phishing_left'>
                    <p><img src={newBg}/><br />Introducing</p>
                </div>
                <div className='phishing_right'>
                    <p className='phishing_rightTitle'><img src={phishingLogo} />Phishing Beacon</p>
                    <p className='phishing_RightDesc'>Traditionally, cyber threat intelligence vendors uncover phishing websites through typo squat methods. Our solution uses such methods as well. However, many phishing pages are hosted on live, valid domains by adding a new URL with the phishing page, making these methods ineffective. That’s why Algoritmik has created its<span className='colorText'> own Phishing Detection technology.</span></p>
                    <img className='phishingimg' src={phishingimg}/>
                </div>
            </div>
            <div className='phishing_section5'>
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

export default phishingBeacon