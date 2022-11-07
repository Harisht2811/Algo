import React from 'react'
import './style.css'
import './laptop.css'
import vendorImg from '../../images/thirdparty/Group128.png'
import sysImg from '../../images/thirdparty/Group142.png'
import vline from '../../images/thirdparty/vline.png'
function thirdparty() {
    return (
        <div>
            <div className='party_section1'>
                <div className=''>
                    <div className='party_Title'>Identify the cyber risk <br /> within your supply chain</div>
                    <p className="partyDesc">Algoritmik enables you to continuously monitor the organization’s <br /> 3rd party vendors’ security posture and effectively prioritize and mitigate risks</p>
                    <p className="party_demoBtn ">Get a Demo</p>
                </div>
                <div className='party_section2'>
                    <img className='vendorImg' src={vendorImg} alt='vendor' />
                    <div className='vendorRight'>
                        <p className='vendorTitle'>Vendor Risk Management Features</p>
                        <p className='vendorDesc'>Algoritmik’s Vendor Risk Management provides your organization with a tool that
                            automatically monitors the level of resilience of your supply chain partners and vendors
                            and provides a score to their security posture. It offers a continuous monitoring of the organization’s 3rd party vendors’ cyber posture to ensure the ability to demand better
                            security hygiene practices from your 3rd party partners as well as the visibility into how your partners may expose you to threats and incidents</p>
                    </div>
                </div>
            </div>
            <div className='party_section3'>
                <div className='cyberleft'>
                    <p className='cyberTitle'>Cyber Scoring</p>
                    <p className='cyberDesc'>Algoritmik’s scoring includes continuous scanning which runs on a daily/weekly basis covering 10 categories each evaluated according to severity, level of significance and frequency of occurrences. Every event the system assesses is evaluated according to severity, level of significance and frequency of occurrences. The output of the scan and analysis is provided in an easy-to-read report</p>
                </div>
                <img className='sysImg' src={sysImg} alt='sysimg' />
            </div>
            <div className='party_section3Bg'>

                <div className='impact'>
                    <p className='impactTitle'>Our Impact in your Business</p>
                    <p className='impactDesc'>Algoritmik enables you to continuously monitor the organization’s <br/>3rd party vendors’ security posture and effectively prioritize and mitigate risks</p>
                </div>
                <div className='impactList' >
                    <div>
                        <div className='vlineImg'><img src={vline} alt='vline' /></div>
                        <div className='listName'>
                            <p className='listTitle'>Security cost <br/> reduction</p>
                            <p className='listDesc'>Significant reduction in vendor onboarding and evaluation costs, platform automation reduces 90% of <br/>manual assessment.</p>
                        </div>
                    </div>
                    <div >
                        <div className='vlineImg'><img src={vline} alt='vline' /></div>
                        <div className='listName'>
                            <p className='listTitle'>Simple scoring of 3rd party <br/>partners</p>
                            <p className='listDesc'>Direct impact on security posture negotiations with suppliers. Direct impact on security posture negotiations <br/> with suppliers.</p>
                        </div>
                    </div>
                    <div>
                        <div className='vlineImg'><img src={vline} alt='vline' /></div>
                        <div className='listName'>
                            <p className='listTitle'>Track and assess security<br/> across your industry</p>
                            <p className='listDesc'>Our technology tracks the history of your reports, highlights trends in your industry, and compares your <br/> assessment to other companies in your industry</p>
                        </div>
                    </div>
                </div>
                <div className='party_section5'>
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
        </div>
    )
}
// import thirdData from '../../content/thirdpartyData.json'
// function thirdparty() {
//     return (
//         <div>
//         {thirdData.map(item => {
//             return <div>
//             <div className='party_section1'>
//                 <div className=''>
//                     <div className='party_Title'>{item.title1} <br/>{item.title2}</div>
//                     <p className="partyDesc">{item.titleDesc1} <br/>{item.titleDesc2}</p>
//                     <p className="party_demoBtn ">{item.demo}</p>
//                 </div>
//                 <div className='party_section2'>
//                     <img className='vendorImg' src={vendorImg} alt='vendor' />
//                     <div className='vendorRight'>
//                         <p className='vendorTitle'>{item.vendorTitle}</p>
//                         <p className='vendorDesc'>{item.vendorDesc}</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='party_section3'>
//                 <div className='cyberleft'>
//                     <p className='cyberTitle'>{item.cyberTitle}</p>
//                     <p className='cyberDesc'>{item.cyberDesc}</p>
//                 </div>
//                 <img className='sysImg' src={sysImg} alt='sysimg' />
//             </div>
//             <div className='party_section3Bg'>

//                 <div className='impact'>
//                     <p className='impactTitle'>{item.impactTitle}</p>
//                     <p className='impactDesc'>{item.impactDesc1}<br/>{item.impactDesc2}</p>
//                 </div>
//                 <div className='impactList' >
//                     { item.impactList.map(item =>{
//                         return  <div>
//                         <div className='vlineImg'><img src={vline} alt='vline' /></div>
//                         <div className='listName'>
//                             <p className='listTitle'>{item.listTitle}</p>
//                             <p className='listDesc'>{item.listDesc}</p>
//                         </div>
//                     </div>
//                     })}
//                 </div>
//                 <div className='party_section5'>
//                     <div className='heard'>
//                         <div className='securityIssues'>
//                             <div className='securityText'>
//                                 <p id='titleIssues'>{item.hearTitle}</p>
//                                 <p id='textIssues'>{item.heardDesc}</p>
//                             </div>
//                             <button className='certificateButton'>{item.heardBtn}</button>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//         })}
//         </div>
//     )}

export default thirdparty