import React from 'react'
import './style.css'
import search from '../../images/attacker/group186.png'
import pinpoint from '../../images/attacker/group187.png'
import risk from '../../images/attacker/group188.png'
import secure from '../../images/attacker/group189.png'
import hrLine from '../../images/attacker/Rectangle94.png'
import digitalpresence from '../../images/attacker/Group167.png'
import security from '../../images/attacker/Group176.png'
import assess from '../../images/attacker/Group191.png'
import monitor from '../../images/attacker/Group192.png'
import arrow from '../../images/attacker/Arrow.png'

function attack() {
  return (
    <div className='container'>
      <div className='section1'>
        <div className='attack_Title'>Gain an <br />attacker's viewpoint</div>
        <p className="attackDesc">To protect your organization, you first need to know what assets and digital surface to protect. It’s easy to perform a vulnerability scan against known assets,
          but it’s hard to keep track of new assets that are constantly being added to your infrastructure.</p>
        <p className="demoBtn btn">Get a Demo</p>
      </div>
      <div className='section2'>
        <div className='section2_title'>We helps you in</div>
        <div className='section2_list'>
          <div className='whyhelp_list'>
            <img className='icon' src={search}></img>
            <p className='list_title'>Identify vulnerabilities</p>
          </div>
          <img className='hrLine' src={hrLine} />
          <div className='whyhelp_list'>
            <img className='icon' src={pinpoint}></img>
            <p className='list_title'>Identify vulnerabilities</p>
          </div>
          <img className='hrLine' src={hrLine} />
          <div className='whyhelp_list'>
            <img className='icon' src={risk}></img>
            <p className='list_title'>Identify vulnerabilities</p>
          </div>
          <img className='hrLine' src={hrLine} />
          <div className='whyhelp_list'>
            <img className='icon' src={secure}></img>
            <p className='list_title'>Identify vulnerabilities</p>
          </div>
        </div>
      </div>
      <div className='section3'>
        <div className='section3_desc'>Attack Surface Management provides <span className='colorText'> automatic and full visibility into your digital presence–uncovering security issues </span>and vulnerabilities that can be exploited by potential adversaries</div>
      </div>
      <div className='section4'>
        <div className='section4_title'>other Services</div>
        <div className='sectionCard'>
          <div className='cardLeft'>
            <p className='cardTitle'>Uncover your digital presence</p>
            <p className='cardDesc'>Discover and map all externally facing digital assets such as domains, IP addresses, websites, and cloud storage and more. Collect information from multiple open, deep and dark data sources to uncover your organization’s entire digital presence and help mitigate Shadow IT.</p>
            <p className='cardBtn'>Get a Demo <img src={arrow} className='demoArrow' /></p>
          </div>
          <div className='cardRight'>
            <img className='cardImg' src={digitalpresence} />
          </div>
        </div>
        <div className='sectionCard'>
          <div className='cardLeft'>
            <p className='cardTitle'>Identify security issues</p>
            <p className='cardDesc'>Continuously scan and map the organization’s digital presence to detect issues and vulnerabilities such as leaked credentials, botnet infections, exploitable open ports, vulnerable web interfaces, and more</p>
            <p className='cardBtn'>Get a Demo <img src={arrow} className='demoArrow' /></p>
          </div>
          <div className='cardRight'>
            <img className='cardImg' src={security} />
          </div>
        </div>
        <div className='sectionCard'>
          <div className='cardLeft'>
            <p className='cardTitle'>Uncover your digital presence</p>
            <p className='cardDesc'>Discover and map all externally facing digital assets such as domains, IP addresses, websites, and cloud storage and more. Collect information from multiple open, deep and dark data sources to uncover your organization’s entire digital presence and help mitigate Shadow IT.</p>
            <p className='cardBtn'>Get a Demo <img src={arrow} className='demoArrow' /></p>
          </div>
          <div className='cardRight'>
            <img className='cardImg' src={assess} />
          </div>
        </div>
        <div className='sectionCard'>
          <div className='cardLeft'>
            <p className='cardTitle'>Uncover your digital presence</p>
            <p className='cardDesc'>Discover and map all externally facing digital assets such as domains, IP addresses, websites, and cloud storage and more. Collect information from multiple open, deep and dark data sources to uncover your organization’s entire digital presence and help mitigate Shadow IT.</p>
            <p className='cardBtn'>Get a Demo <img src={arrow} className='demoArrow' /></p>
          </div>
          <div className='cardRight'>
            <img className='cardImg' src={monitor} />
          </div>
        </div>
      </div>
      <div className='section5'>
        <div className='section5_box'>
          <div>
            <p className='box_title'>Heard enough? See it for yourself.</p>
            <p className='box_desc'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
          </div>
          <div>
            <p className='box_btn'>Get a Demo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default attack