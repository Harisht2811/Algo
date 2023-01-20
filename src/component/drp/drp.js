import React from 'react'
import { useState } from 'react'
import u1 from '../../images/drp/u1.png'
import u2 from '../../images/drp/u2.png'
import u3 from '../../images/drp/u3.png'
import u4 from '../../images/drp/u4.png'
import u5 from '../../images/drp/u5.png'
import u6 from '../../images/drp/u6.png'
import b1 from '../../images/drp/b1.png'
import b2 from '../../images/drp/b2.png'
import b3 from '../../images/drp/b3.png'
import b4 from '../../images/drp/b4.png'
import b5 from '../../images/drp/b5.png'
import vline from '../../images/drp/vline.png'
import vendorImg from '../../images/thirdparty/Group128.png'
import search from '../../images/drp/s1.png'
import Darrow from '../../images/drp/Darrow.png'
import phishingLogo from '../../images/phishing/phishingLogo.png'
import g1 from '../../images/drp/g1.png'
import g2 from '../../images/drp/g2.png'
import g3 from '../../images/drp/g3.png'
import hline from '../../images/drp/hline.png'

import Popup from '../getdemo/getdemo'
import './style.css'
import './laptop.css'
import './tab.css'
import './mobile.css'
function Drp() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <div className='drpbanner'>
                <div className='drp_Title'><span className='textcolor'>Intelligence-Driven </span> <br />Digital Risk Protection</div>
                <p className="drpDesc">Algoritmik's Digital Risk Protection (DRP) platform is designed to help organizations stay ahead of <br /> cyber threats and protect their digital assets.</p>
                <p className="drp_demoBtn " onClick={() => setButtonPopup(true)}>Get Algoritmik DRP</p>
            </div>
            <div className='utilizing'>
                <p className='utilizingTitle'>Utilizing a combination of proprietary threat intelligence platforms <br /> and experienced analysts, the platform aims to</p>
                <div className='utilizingBlock'>
                    <div className='utilizingList'>
                        <img className='uticon' src={u1} alt='icon' />
                        <p className='utTitle'>Identify relevant threats to <br /> design an effective cybersecurity <br /> defense program.</p>
                    </div>
                    <div className='utilizingList'>
                        <img className='uticon' src={u2} alt='icon' />
                        <p className='utTitle'>Provide the board and management <br /> a clear action plan to confront the <br /> current cyber risk status.</p>
                    </div>
                    <div className='utilizingList'>
                        <img className='uticon' src={u3} alt='icon' />
                        <p className='utTitle'>Acquire predictive intelligence to <br /> mitigatetargeted threats before <br /> they occur.</p>
                    </div>
                    <div className='utilizingList'>
                        <img className='uticon' src={u4} alt='icon' />
                        <p className='utTitle'>Continuously monitor <br /> digital risk exposure that <br /> cybercriminals can exploi.</p>
                    </div>
                    <div className='utilizingList'>
                        <img className='uticon' src={u5} alt='icon' />
                        <p className='utTitle'>Detect and respond to breaches <br /> as they propagate outside the <br /> organization's perimeter.</p>
                    </div>
                    <div className='utilizingList'>
                        <img className='uticon' src={u6} alt='icon' />
                        <p className='utTitle'>Monitor and protect against attacks <br /> targeting your brand and customers <br />that are constantly evolving.</p>
                    </div>
                </div>
                <div className='challenge'>
                    <div className='challengeLeft'>
                        <img className='challengeImg' src={vendorImg} alt='vendor' />
                    </div>
                    <div className='challengeRight'>
                        <p className='challengeRight_title'><span className='textcolor'> Algoritmik addresses </span> the following business <br/> challenges &nbsp;&nbsp;&nbsp; <img src={Darrow} /> </p>
                        <div className='challengeBlock'>
                            <ul className='challengeList'>
                                <li>Brand protection</li>
                                <li>Attackware detection</li>
                                <li>Third-party cyber risk</li>
                                <li>Dark web monitoring</li>
                                <li>Digital risk-surface monitoring Fraud</li>
                                <li>Threat intelligence</li>
                                <li>Data-leakage detection</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='drive'>
                    <p className='driveTitle'><span className='textcolor'>Algoritmik’s intelligence-driven </span>Digital Risk Protection (DRP) platform</p>
                    <p className='drivedesc'>Algoritmik's DRP is a multi-tenant, SaaS solution designed to safeguard your organization’s digital assets.</p>
                    <div className='drive_CardList'>
                        <div className='driveCard'>
                            <p className='driveCard_title'>Attack-Surface <br /> Mapping</p>
                            <p className='driveCard_desc'>One key feature of our platform is our Attack-Surface Mapping module, which helps you identify and track your organization’s digital footprint. We continuously monitor your assets beyond the perimeter and prioritize issues based on severity, highlighting any related threats, vulnerabilities, and weaknesses.</p>
                        </div>
                        <div className='driveCard'>
                            <p className='driveCard_title'>Threat-Intelligence <br /> Collection and Analysis</p>
                            <p className='driveCard_desc'>Algoritmik’s Threat-Intelligence Collection and Analysis module keeps you one step ahead of potential threats. We constantly monitor thousands of sources on the open, deep and dark web to collect millions of intelligence items daily, which are then correlated with your organization's assets (i.e., IPs, domains, brands, executives) and categorized according to specific use cases such as phishing, malware campaigns and fraudulent activity.</p>
                        </div>
                    </div>
                </div>
                <p className='forensicdesc1'>Using our proprietary machine-learning algorithm, we prioritize this raw intelligence based on potential risk and impact, enabling cost-effective analysis. Our automatic and semi-automatic analysis engines then generate actionable intelligence alerts, complete with in-depth analysis, enriched context and threat-actor profiling, to help your security team take effective action.</p>
                <div className='forensic'>
                    <img className='searchiconimg' src={search} alt='search' />
                    <p className='forensictitle'>Forensic Canvas</p>
                    <p className='forensicdesc'>Algoritmik’s Forensic Canvas module is designed to help identify and profile threat actors, as well as thoroughly investigate the tools, tactics and procedures (TTPs) they use. This module integrates multiple services into a single platform, enabling a unified investigation of specific or multiple indicators of compromise (IOCs). These services include Algoritmik's Threat Intelligence, WHOIS, passive DNS, social discovery, and malicious code detection.</p>
                </div>
                <div className='forensicflex'>
                    <div className='forensicflexLeft'>
                        <p>Proactive phishing detection technology & takedowns</p>
                    </div>
                    <div className='forensicflexRight'>
                        <p className='forensicflexRightTitle'><img src={phishingLogo} /> &nbsp;&nbsp;&nbsp;Phishing Beacon</p>
                        <p className='forensicflexRightDesc'>Algoritmik’s Phishing Beacon is a proprietary module that provides real-time visibility into newly created phishing sites that have been cloned from an organization’s website. Threat actors frequently used this technique, but Algoritmik’s rapid detection allows us to take down these sites on behalf of your organization, reducing the risk of account takeover, customer churn and damage to brand reputation.</p>
                    </div>
                </div>
                <p className='benefit'>You will <span className='textcolor'> be benefited with!</span></p>
                <div className='benefitBlock'>
                    <div className='benefitList'>
                        <img className='benefiticon' src={b1} alt='icon' />
                        <p className='benefitTitle'>Reducing unauthorized <br /> technology usage (Shadow IT).</p>
                    </div>
                    <div className='benefitList'>
                        <img className='benefiticon' src={b2} alt='icon' />
                        <p className='benefitTitle'>Visibility into potential <br /> vulnerabilities and exploitable attack surface.</p>
                    </div>
                    <div className='benefitList'>
                        <img className='benefiticon' src={b3} alt='icon' />
                        <p className='benefitTitle'>Identifying and address threats to <br />minimize the time they remain undetected.</p>
                    </div>
                    <div className='benefitList'>
                        <img className='benefiticon' src={b4} alt='icon' />
                        <p className='benefitTitle'>Enhance your ability to handle <br /> cybersecurity threats and prevent attacks.</p>
                    </div>
                    <div className='benefitList'>
                        <img className='benefiticon' src={b5} alt='icon' />
                        <p className='benefitTitle'>Lower the cost of maintaining strong <br /> cybersecurity measures within your organization.</p>
                    </div>
                </div>
                <img className='linev' src={vline} alt='line' />
                <div className='theate'>
                    <p className='theartTitle '>Managed Threat-Intelligence Service</p>
                    <p className='threatdecs'>Customized cyber-intelligence services to augment your organization’s threat-intelligence. Improve your team’s threat-intelligence capabilities with Algoritmik’s managed Digital Risk Protection program. Our team of dedicated, industry-specific analysts will work closely with your in-house team to provide a higher level of quality and performance for your CTI program.</p>
                </div>
                <div className='flextData'>
                    <div className='partnership'>
                        <div >
                            <img className='partnershipImg' src={g1} alt='img' />
                        </div>
                        <div className='partnershipRight'>
                            <p><span className='textcolor'>Partnership with Algoritmik </span> includes daily interaction with a dedicated analyst who becomes a member of your team. Algoritmik selects analysts based on their expertise in your industry and their understanding of your business needs.</p>
                        </div>
                    </div>
                    <div className='analysts'>
                        <div className='analystsleft'>
                            <p><span className='textcolor'>Algoritmik’s analysts verify,</span> contextualize and attribute real risks to raw intelligence gathered from the open, deep and dark web. Our team is multilingual, allowing for an understanding of threat actors in their own language. Our analysts are also skilled in the “lingo” and culture of cybercriminals, helping you identify and mitigate likely attacks.</p>
                        </div>
                        <div >
                            <img className='analystsImg' src={g2} alt='img' />
                        </div>
                    </div>
                    <div className='partnership'>
                        <div >
                            <img className='partnershipImg' src={g3} alt='img' />
                        </div>
                        <div className='partnershipRight'>
                            <p><span className='textcolor'>In addition to providing valuable research, </span> investigation and threat-intelligence capabilities, Algoritmik offers Virtual HUMINT capabilities (live interactions with threat actors) for deeper contextualization and more effective mitigation.</p>
                        </div>
                    </div>
                </div>
                <p className='benefit1'>Benefits of partnership with Algoritmik’s managed threat-intelligence services</p>
                <div className='benefitBlock1'>
                    <div className='benefitList1'>
                        <div className='vlineImg'><img src={hline} alt='vline' /></div>
                        <div className='benefitListName'>
                            <p className='listTitle'>Threat detection</p>
                            <p className='benefitListDesc'>Algoritmik’s predictive intelligence can help your organization identify  and detect potential threats before they occur.</p>
                        </div>
                    </div>
                    <div className='benefitList1'>
                        <div className='vlineImg'><img src={hline} alt='vline' /></div>
                        <div className='benefitListName'>
                            <p className='listTitle'>Identification of fraud operations</p>
                            <p className='benefitListDesc'>Algoritmik can provide actionable intelligence on how to respond  and mitigate fraud operations.</p>
                        </div>
                    </div>
                    <div className='benefitList1'>
                        <div className='vlineImg'><img src={hline} alt='vline' /></div>
                        <div className='benefitListName'>
                            <p className='listTitle'>Virtual HUMINT capabilities</p>
                            <p className='benefitListDesc'>Algoritmik’s services allow you to communicate directly with threat actors and attribute their activity to specific campaigns, providing valuable context and intelligence.</p>
                        </div>
                    </div>
                    <div className='benefitList1'>
                        <div className='vlineImg'><img src={hline} alt='vline' /></div>
                        <div className='benefitListName'>
                            <p className='listTitle'>VIP threat investigations</p>
                            <p className='benefitListDesc'>Algoritmik can monitor the online presence of your executives to prevent threat actors from obtaining personal information for malicious use.</p>
                        </div>
                    </div>
                    <div className='benefitList1'>
                        <div className='vlineImg'><img src={hline} alt='vline' /></div>
                        <div className='benefitListName'>
                            <p className='listTitle'>Real-time phishing detection</p>
                            <p className='benefitListDesc'>Algoritmik’s real-time phishing website detection and takedown operations can help protect your organization against phishing attacks.</p>
                        </div>
                    </div>
                    <div className='benefitList1'>
                        <div className='vlineImg'><img src={hline} alt='vline' /></div>
                        <div className='benefitListName'>
                            <p className='listTitle'>Mapping and monitoring of digital presence</p>
                            <p className='benefitListDesc'>Algoritmik can help your organization map and monitor its digital presence, including credential leaks, digital vulnerabilities, and sensitive document leakage.</p>
                        </div>
                    </div>
                    <div className='benefitList1'>
                        <div className='vlineImg'><img src={hline} alt='vline' /></div>
                        <div className='benefitListName'>
                            <p className='listTitle'>Identification of severity</p>
                            <p className='benefitListDesc'>Algoritmik’s services can help your organization identify the severity of threats and understand the bigger picture.</p>
                        </div>
                    </div>
                </div>  
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <p id='getintouch'>Get in touch with us </p>
                <label>Name*</label>
                <input className='Fname' type="text" ></input>
                <label>Email*</label>
                <input className='Femail' type="text" ></input>
                <label>Mobile Number*</label>
                <input className='Fphone' type="phone" ></input>
                <button className='Fbutton'>Submit</button>
            </Popup>
        </div>
    )
}

export default Drp