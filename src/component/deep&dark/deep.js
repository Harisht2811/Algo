import React from 'react'
import { useState } from 'react'
import Popup from '../getdemo/getdemo'
import './style.css'
import './laptop.css'
import './tab.css'
import './mobile.css'
import hrline from '../../images/deepdark/hrline.png'
import arrowG from '../../images/deepdark/Arrowgreen.png'
import discoverimg from '../../images/deepdark/discover.png'
import analysisimg from '../../images/deepdark/analysis.png'
import mitigateimg from '../../images/deepdark/mitigate.png'
import threatimg from '../../images/deepdark/threat.png'


function Deep() {
    const [buttonPopup, setButtonPopup] =useState(false);
    return (
        <>
        <div>
            <div className='dark_section1'>
                <div className='dark_Title'>Understand and engage <br /> <span className='colortext'>with the dark side</span></div>
                <p className="darkDesc">Cybercriminals lurk in the dark web where they can methodically coordinate their attacks, distribute malware <br />and phishing kits, sell illicit goods, and share other pre-built exploits.</p>
                <p className="dark_demoBtn " onClick={() => setButtonPopup(true)}>Enquire Now</p>
            </div>
            <div className='dark_section2'>
                <p className='work_title'>How we work</p>
                <img src={hrline} className='dark_hrline' alt='hrline'/>
                <p className='work_desc'>In addition, many high value closed sources present technical and financial barriers to entry.Using technology with a human touch, however, Algoritmik can access the most restricted channels to engage with threat actors and anticipate attacks targeting your organization, employees, and customers</p>
                <img src={hrline} className='dark_hrline' alt='hrline'/>
            </div>
            <div className='dark_section3'>
                <div className='darkcard'>
                    <div className='darkcard_left'>
                        <img className='leftcardimg' src={discoverimg} alt='card'/>
                        <p className='leftcard_title'>Continueslly discover new sources</p>
                    </div>
                    <div className='darkcard_right'>
                        <p className='rightcard_desc'>Find new sources in deep and dark web marketplaces, forums, and sites with threat actor communities that can be volatile and difficult to track</p>
                        <p className='darkdemo'>Enquire Now <img src={arrowG} className='arrowG' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
                    </div>
                </div>
                <div className='darkcard'>
                    <div className='darkcard_left'>
                        <img className='leftcardimg' src={analysisimg} alt='card'/>
                        <p className='leftcard_title'>Get deep analysis and reports</p>
                    </div>
                    <div className='darkcard_right'>
                        <p className='rightcard_desc'>Understand a specific threat actor and group profiling, including the place of operations, targeted countries or verticals, tools in use and the type of operations often associated with this actor or group.</p>
                        <p className='darkdemo'>Enquire Now <img src={arrowG} className='arrowG' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
                    </div>
                </div>
                <div className='darkcard'>
                    <div className='darkcard_left'>
                        <img className='leftcardimg' src={threatimg}  alt='card'/>
                        <p className='leftcard_title'>Engage threat actors</p>
                    </div>
                    <div className='darkcard_right'>
                        <p className='rightcard_desc'>Engage with threat actors through private messages, getting access to exclusive communities. Develop a fake persona so that you can post on sources and contact other threat actors.</p>
                        <p className='darkdemo'>Enquire Now <img src={arrowG} className='arrowG'  alt='arrow' onClick={() => setButtonPopup(true)}/></p>
                    </div>
                </div>
                <div className='darkcard'>
                    <div className='darkcard_left'>
                        <img className='leftcardimg' src={mitigateimg}  alt='card'/>
                        <p className='leftcard_title'>Mitigate and remediate threats</p>
                    </div>
                    <div className='darkcard_right'>
                        <p className='rightcard_desc'>Assess and respond to threats to your physical and digital assets proactively with the help of our highly skilled analysts.</p>
                        <p className='darkdemo'>Enquire Now <img src={arrowG} className='arrowG'  alt='arrow' onClick={() => setButtonPopup(true)}/></p>
                    </div>
                </div>
            </div>
            <div className='deep_dark'>
                <div className='deep_darkLeft'>Maneuver  the  Deep and Dark web</div>
                <div className='deep_darkRight'>In addition, many high value closed sources present technical and financial barriers to entry.Using technology with a human touch, however, Algoritmik can access the most restricted channels to engage with threat actors and anticipate attacks targeting your organization, employees, and customers</div>
            </div>
            <div className='dark_section5'>
                <div className='heard'>
                    <div className='securityIssues'>
                        <div className='securityText'>
                            <p id='titleIssues'>Heard enough? See it for yourself.</p>
                            <p id='textIssues'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
                        </div>
                        <button className='certificateButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
                    </div>
                </div>
            </div>

        </div>
        <Popup trigger ={buttonPopup} setTrigger ={setButtonPopup}>
     <p id='getintouch'>Get in touch with us </p>
     <label>Name*</label>
     <input className='Fname' type="text" ></input>
     <label>Email*</label>
     <input className='Femail' type="text" ></input>
     <label>Mobile Number*</label>
     <input className='Fphone' type="phone" ></input>
     <button className='Fbutton'>Submit</button>    
    </Popup>
       </>
    )
}

export default Deep;

// import deepdark from '../../content/deepData.json'
// function Deep() {
//     const [buttonPopup, setButtonPopup] =useState(false);
//     return (
//         <>
//          {deepdark.map(item => {
//          return <div>
//             <div className='dark_section1'>
//                 <div className='dark_Title'>{item.title}<br /> <span className='colortext'>{item.title1}</span></div>
//                 <p className="darkDesc">{item.titleDesc}</p>
//                 <p className="dark_demoBtn " onClick={() => setButtonPopup(true)}>{item.demo}</p>
//             </div>
//             <div className='dark_section2'>
//                 <p className='work_title'>{item.howweWork}</p>
//                 <img src={item.workHr} className='dark_hrline' alt='hrline'/>
//                 <p className='work_desc'>{item.workDesc}</p>
//                 <img src={item.workHr} className='dark_hrline' alt='hrline'/>
//             </div>
//             <div className='dark_section3'>
//             {item.workCard.map(item => {
//             return <div className='darkcard'>
//                     <div className='darkcard_left'>
//                         <img className='leftcardimg' src={item.icon} alt='card'/>
//                         <p className='leftcard_title'>{item.cardTitle}</p>
//                     </div>
//                     <div className='darkcard_right'>
//                         <p className='rightcard_desc'>{item.cardDesc}</p>
//                         <p className='darkdemo'>{item.carddemo}<img src={arrowG} className='arrowG' alt='arrow' onClick={() => setButtonPopup(true)}/></p>
//                     </div>
//                 </div>
//             })}
//             </div>
//             <div className='deep_dark'>
//                 <div className='deep_darkLeft'>{item.maneuver}</div>
//                 <div className='deep_darkRight'>{item.maneuverDesc}</div>
//             </div>
//             <div className='dark_section5'>
//                 <div className='heard'>
//                     <div className='securityIssues'>
//                         <div className='securityText'>
//                             <p id='titleIssues'>{item.hearTitle}</p>
//                             <p id='textIssues'>{item.heardDesc}</p>
//                         </div>
//                         <button className='certificateButton' onClick={() => setButtonPopup(true)}>{item.heardBtn}</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//          })}
//         <Popup trigger ={buttonPopup} setTrigger ={setButtonPopup}>
//         <p id='getintouch'>Get in touch with us </p>
//         <input className='Fname' type="text" placeholder='Name*'></input>
//         <input className='Femail' type="text" placeholder='Email*'></input>
//         <input className='Fphone' type="phone" placeholder='Mobile number*'></input>
//         <button className='Fbutton'>Submit</button>    
//        </Popup>
//        </>
//     )
// }

// export default Deep;