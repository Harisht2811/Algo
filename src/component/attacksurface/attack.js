import React from 'react'
import './style.css'
import './laptop.css'
import bg from '../../images/attacker/Group190.png'
import search from '../../images/attacker/Group186.png'
import pinpoint from '../../images/attacker/Group187.png'
import risk from '../../images/attacker/Group188.png'
import secure from '../../images/attacker/Group189.png'
import hrLine from '../../images/attacker/Rectangle94.png'
import digitalpresence from '../../images/attacker/Group167.png'
import security from '../../images/attacker/Group176.png'
import assess from '../../images/attacker/Group191.png'
import monitor from '../../images/attacker/Group192.png'
import arrow from '../../images/attacker/Arrow.png'

function attack() {
  return (
    <div className='container'>
      <div className='attack_section1'>
        <div className='attack_Title'>Gain an <br />attacker's viewpoint</div>
        <p className="attackDesc">To protect your organization, you first need to know what assets and digital surface to protect. It’s easy to perform a vulnerability scan against known assets,
          but it’s hard to keep track of new assets that are constantly being added to your infrastructure.</p>
        <p className="demoBtn btn">Get a Demo</p>
      </div>
      <div className='attack_section2'>
        <div className='attack_section2_title'>We helps you in</div>
        <div className='attack_section2_list'>
          <div className='whyhelp_list'>
            <img className='icon' src={search} alt='search'></img>
            <p className='list_title'>Identify vulnerabilities</p>
          </div>
          <img className='hrLine' src={hrLine} alt='vline' />
          <div className='whyhelp_list'>
            <img className='icon' src={pinpoint} alt='pinpoint'></img>
            <p className='list_title'>Pinpoint user types</p>
          </div>
          <img className='hrLine' src={hrLine} alt='vline'/>
          <div className='whyhelp_list'>
            <img className='icon' src={risk} alt='risk'></img>
            <p className='list_title'>Perform a risk assessment</p>
          </div>
          <img className='hrLine' src={hrLine} alt='vline'/>
          <div className='whyhelp_list'>
            <img className='icon' src={secure} alt='secure'></img>
            <p className='list_title'>Secure your reporting</p>
          </div>
        </div>
      </div>
      <div className='attack_section3'> 
        <img src={bg} alt='bgImg'/>
        <p className='attack_section3_desc'>Attack Surface Management provides <span className='colorText'> automatic and full visibility into your digital presence–uncovering security issues </span>and vulnerabilities that can be exploited by potential adversaries</p>
      </div>
      <div className='attack_section4'>
        <div className='attack_section4_title'>other Services</div>
        <div className='attack_sectionCard'>
          <div className='attack_cardLeft'>
            <p className='attack_cardTitle'>Uncover your digital presence</p>
            <p className='attack_cardDesc'>Discover and map all externally facing digital assets such as domains, IP addresses, websites, and cloud storage and more. Collect information from multiple open, deep and dark data sources to uncover your organization’s entire digital presence and help mitigate Shadow IT.</p>
            <p className='attack_cardBtn'>Get a Demo <img src={arrow} className='demoArrow' /></p>
          </div>
          <div className='attack_cardRight'>
            <img className='attack_cardImg' src={digitalpresence} alt='digital'/>
          </div>
        </div>
        <div className='attack_sectionCard'>
          <div className='attack_cardLeft'>
            <p className='attack_cardTitle'>Identify security issues</p>
            <p className='attack_cardDesc'>Continuously scan and map the organization’s digital presence to detect issues and vulnerabilities such as leaked credentials, botnet infections, exploitable open ports, vulnerable web interfaces, and more</p>
            <p className='attack_cardBtn'>Get a Demo <img src={arrow} className='demoArrow' alt='arrow'/></p>
          </div>
          <div className='attack_cardRight'>
            <img className='attack_cardImg' src={security} alt='security' />
          </div>
        </div>
        <div className='attack_sectionCard'>
          <div className='attack_cardLeft'>
            <p className='attack_cardTitle'>Assess and prioritize risks</p>
            <p className='attack_cardDesc'>Calculate a security score by comparing current threats against your organization’s current best practices. Track and manage identified issues and assets so that your organization can focus on and address the most critical issues first.</p>
            <p className='attack_cardBtn'>Get a Demo <img src={arrow} className='demoArrow' alt='arrow'/></p>
          </div>
          <div className='attack_cardRight'>
            <img className='attack_cardImg' src={assess} alt='assess'/>
          </div>
        </div>
        <div className='attack_sectionCard'>
          <div className='attack_cardLeft'>
            <p className='attack_cardTitle'>Monitor your attack surface</p>
            <p className='attack_cardDesc'>Monitor your organization’s constantly changing and entire digital presence to gain automatic and full visibility on an ongoing basis. Remap and continuously scan all assets every week, based on specific requirements</p>
            <p className='attack_cardBtn'>Get a Demo <img src={arrow} alt='arrow' className='demoArrow' /></p>
          </div>
          <div className='attack_cardRight'>
            <img className='attack_cardImg' src={monitor} alt='monitor'/>
          </div>
        </div>
      </div>
      <div className='attack_section5'>
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

export default attack;
 