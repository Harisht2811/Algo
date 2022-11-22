import React from 'react'
import { useState } from 'react'
import './style.css'
import './laptop.css'
import './tab.css'
import './mobile.css'
import arrowG from '../../images/deepdark/Arrowgreen.png'
import vectorHrline from '../../images/virtual/vectorHrline.png'
import Popup from '../getdemo/getdemo'
function Virtual() {
  const [buttonPopup, setButtonPopup] =useState(false);

    return (
        <>
        <div>
            <div className='virtual_section1'>
                <p className='virtualBtn'>Virtual Humint Operations</p>
                <div className='virtual_Title'>Active Engagement with <br /> Threat Actors</div>
                <p className="virtual_demoBtn" onClick={() => setButtonPopup(true)}>Get a Demo</p>
            </div>
            <div className='virtualCardlist'>
                <div className='virtualcard1'>
                    <div className='virtualCard'>
                        <p className='virtualCard_title'>Assess veracity and imminence of threats </p>
                        <img className='vectorHrline' src={vectorHrline} alt='hrline' />
                        <p className='virtualCard_desc'>Gather additional information to shed light on crucial factors related to any threat–including possibly revealing the threat actor identity and providing it to law enforcement </p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' alt='arrow'  onClick={() => setButtonPopup(true)}/></p>
                    </div>
                    <div className='virtualCard'>
                        <p className='virtualCard_title'>Obtain TTPs, motivation and accomplices</p>
                        <img className='vectorHrline' src={vectorHrline} alt='hrline' />
                        <p className='virtualCard_desc'>Deepen your understanding of the vectors behind the threat, the actor’s motivation, and TTPs in use so that you can prioritize and act accordingly</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' alt='arrow'  onClick={() => setButtonPopup(true)}/></p>
                    </div>
                </div>
                <div className='virtualcard1'>
                    <div className='virtualCard'>
                        <p className='virtualCard_title'>Gather IOCs to further investigate threats</p>
                        <img className='vectorHrline' src={vectorHrline} alt='hrline' />
                        <p className='virtualCard_desc'>Engage in intelligence operation and communicate with threat actors in their communication channels</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' alt='arrow'  onClick={() => setButtonPopup(true)}/></p>
                    </div>
                    <div className='virtualCard'>
                        <p className='virtualCard_title'>Analyze your entire threat landscape</p>
                        <img className='vectorHrline' src={vectorHrline} alt='hrline' />
                        <p className='virtualCard_desc'>Conduct deep dive investigations and get the context required to mitigate threats in the most effective way</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' alt='arrow'  onClick={() => setButtonPopup(true)}/></p>
                    </div>
                </div>
                <div className='virtualBox'>
                    <p className='virtualBox_title'>Virtual HumInt that Delivers Effective Mitigation</p>
                    <p className='virtualBox_desc'>When it comes to research, investigation, and threat intelligence operations.<br /> Deepen your understanding of the vectors behind the threat itself, including the threat actor’s motivation, the<br /> tools, tactics and procedures (TTPs) in use, third-party vendors involved, and other crucial factors</p>
                </div>
            </div>
            <div className='virtualline_box'>
                <div className='virtual_line'>
                    <div>
                        <p className='Leveraging_title'>Leveraging Traditional <span className='colorText'>HUMINT Methodologies </span>in Cyberspace</p>
                    </div>
                    <div>
                        <p className='Leveraging_desc1'>Human intelligence, or HUMINT, is a term that traditionally refers to intelligence gathered through interpersonal contact. HUMINT activities involve human sources and human handlers – interactions with “assets”– i.e., traditional espionage strategies.</p>
                    </div>
                    <div>
                        <p className='Leveraging_desc2'>What’s key here is that classic HUMINT relies on personal meetings and engagements with people that create trust and lead to powerful, long-term relationships, with a high degree of commitment and devotion.</p>
                    </div>
                </div>
                <img className='horizline' src={vectorHrline} alt='hrilne' />
                <div className='virtual_line'>
                    <div>
                        <p className='Leveraging_title1'>The <span className='colorText'>Importance of HUMINT</span> in Business Intelligence</p>
                    </div>
                    <div>
                        <p className='Leveraging_desc3'>The integration of traditional HUMINT methodologies is crucial when hunting down cyber-criminals and identifying cyber security threats to businesses. That’s because the highest level of intelligence gathering requires human interaction and contact – a sensitive process that requires an intuitive and honed ability to understand and analyze people.</p>
                    </div>
                    <div>
                        <p className='Leveraging_desc4'>When a breach takes place, communicating with threat actors allows companies to understand the extent of the breach and learn how the attacker got into the system. HUMINT methodologies also help companies figure out the source of a leak and, in an extortion attack, it allows companies to identify whether an attacker’s demand for ransom is legitimate</p>
                    </div>
                </div>
            </div>
            <div className='virtual_section5'>
                <div className='heard'>
                    <div className='securityIssues'>
                        <div className='securityText'>
                            <p id='titleIssues'>Heard enough? See it for yourself.</p>
                            <p id='textIssues'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
                        </div>
                        <button className='certificateButton' onClick={() => setButtonPopup(true)}>Get a demo</button>
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

export default Virtual