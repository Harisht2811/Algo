import React from 'react'
import './style.css'
import vendorImg from '../../images/thirdparty/Group128.png'
import sysImg from '../../images/thirdparty/Group142.png'
import vline from '../../images/thirdparty/vline.png'
function thirdparty() {
    return (
        <div>
            <div className='party_section1'>
                <div className='party_Title'>Identify the cyber risk <br /> within your supply chain</div>
                <p className="partyDesc">Algoritmik enables you to continuously monitor the organization’s <br /> 3rd party vendors’ security posture and effectively prioritize and mitigate risks</p>
                <p className="party_demoBtn btn">Get a Demo</p>
            </div>
            <div className='party_section2'>
                <img className='vendorImg' src={vendorImg} />
                <div className='vendorRight'>
                    <p className='vendorTitle'>Vendor Risk Management Features</p>
                    <p className='vendorDesc'>Algoritmik’s Vendor Risk Management provides your organization with a tool that
                        automatically monitors the level of resilience of your supply chain partners and vendors
                        and provides a score to their security posture. It offers a continuous monitoring of the organization’s 3rd party vendors’ cyber posture to ensure the ability to demand better
                        security hygiene practices from your 3rd party partners as well as the visibility into how your partners may expose you to threats and incidents</p>
                </div>
            </div>
            <div className='party_section3'>
                <div className='cyberleft'>
                    <p className='cyberTitle'>Cyber Scoring</p>
                    <p className='cyberDesc'>Algoritmik’s scoring includes continuous scanning which runs on a daily/weekly basis covering 10 categories each evaluated according to severity, level of significance and frequency of occurrences. Every event the system assesses is evaluated according to severity, level of significance and frequency of occurrences. The output of the scan and analysis is provided in an easy-to-read report</p>
                </div>
                <img className='sysImg' src={sysImg} />
            </div>
            <div className='impact'>
                <p className='impactTitle'>Our Impact in your Business</p>
                <p className='impactDesc'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks</p>
            </div>
            <div className='impactList' >
                <div>
                    <div className='vlineImg'><img  src={vline} /></div>
                    <div className='listName'>
                        <p className='listTitle'>Security cost reduction</p>
                        <p className='listDesc'>Significant reduction in vendor onboarding and evaluation costs, platform automation reduces 90% of manual assessment.</p>
                    </div>

                </div>
                <div >
                    <div className='vlineImg'><img  src={vline} /></div>
                    <div className='listName'>
                        <p className='listTitle'>Simple scoring of 3rd party partners</p>
                        <p className='listDesc'>Direct impact on security posture negotiations with suppliers. Direct impact on security posture negotiations with suppliers.</p>
                    </div>

                </div>
                <div>
                    <div className='vlineImg'><img  src={vline} /></div>
                    <div  className='listName'>
                        <p className='listTitle'>Track and assess security across your industry</p>
                        <p className='listDesc'>Our technology tracks the history of your reports, highlights trends in your industry, and compares your assessment to other companies in your industry</p>
                    </div>

                </div>
            </div>
            <div className='attack_section5'>
        <div className='attack_section5_box'>
          <div>
            <p className='attack_box_title'>Heard enough? See it for yourself.</p>
            <p className='attack_box_desc'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
          </div>
          <div>
            <p className='attack_box_btn'>Get a Demo</p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default thirdparty