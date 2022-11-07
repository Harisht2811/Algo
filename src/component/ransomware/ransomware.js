import React from 'react'
import './style.css'
import './laptop.css'
import computerImg from '../../images/Ransomeware/computerImg.png'
import arrowG from '../../images/deepdark/Arrowgreen.png'
import leftcurve from '../../images/Ransomeware/leftcurve.png'
import rightcurve from '../../images/Ransomeware/rightcurve.png'
function ransomware() {
    return (
        <div>
            <div className='ransom_section1'>
                <div className='ransome_part1'>
                    <p className='ransome_section1_title'><span className='colorText'>Prevent Ransomware with </span>Patented Ransomware Protection Technology</p>
                    <p className='ransome_section1_desc'>Prevent Both Known and Unknown (Zero-day) Attacks Before They Start, Regardless of Your Team’s Size and Skillset.</p>
                    <p className='demobtn '> Get Demo</p>
                </div>
                <div className='ransome_part2'>
                    <div><img src={computerImg} /> </div>
                    <div className='ransome_part2_right'>
                        <p className='ransome_part2_title'>What we do ?</p>
                        <p className='ransome_part2_desc'>Our multi-layer anti-ransomware solution is built to completely prevent ransomware at the earliest and most critical stage of an attack–often months before other solutions can even detect them. Current detection and response approaches require your system to be infectedbefore they can  respond and stop the attack, usually after some critical damage has already been done.</p>
                        <p className='ransome_part2_desc'>Instead of trying to identify threats by looking for patterns, our patented Simulation Engine breaks the attack chain and prevents the attacks before they can even get started, adding a crucial layer to any security stack</p>
                    </div>
                </div>
            </div>
            <div className='ransomware_section2'>
                <p className='ransomeware_section_title'>Algoritmik services on </p>
                <div className='ransomeCardList ransomList1'>
                    <div className='ransomeCard'>
                        <p className='ransomCard_title'>Our Hostile Environment Simulation</p>
                        <p className='ransomCard_desc'>Completely controls how processes perceive their environment. With HES, we turn the malware’s evasive properties against itself by convincing it that it is about to be detected by a local security measure, forcing it into hiding in order to “remain undetected”, which effectivelycauses it to never deploy.</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>
                    </div>
                    <div className='ransomeDotImg'>
                        <img src={rightcurve} />
                    </div>
                </div>
                <div className='ransomeCardList ransomList2'>
                    <div className='ransomeDotImg'>
                        <img className='ransomeDotright' src={leftcurve} />
                    </div>
                    <div className='ransomeCard'>
                        <p className='ransomCard_title'>Blocking malicious macros and powershell attacks</p>
                        <p className='ransomCard_desc'>Our Platform blocks ransomware that spreads via malicious documents. This methodology prevents documents from spawning malicious script driven attacks (macros, Powershell etc.), while still allowing the organization to use these processes for legitimate business purposes.</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>
                    </div>

                </div>
                <div className='ransomeCardList ransomList3'>
                    <div className='ransomeCard'>
                        <p className='ransomCard_title'>Blocking Memory <br/>Injection</p>
                        <p className='ransomCard_desc'>Ransomware often evades detection by injecting malicious code into legitimate applications or OS components. This approach allows malware to get around traditional security mechanisms such as antivirus, application whitelisting and personal firewalls. Minerva’s memory injection module prevents all fileless attacks from taking place before they even start.</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>
                    </div>
                    <div className='ransomeDotImg'>
                        <img  src={rightcurve} />
                    </div>
                </div>
                <div className='ransomeCardList ransomList4'>
                    <div className='ransomeCard'>
                        <p className='ransomCard_title'>Ransomware Remediation</p>
                        <p className='ransomCard_desc'>Completely controls how processes perceive their environment. With HES, we turn the malware’s evasive properties against itself by convincing it that it is about to be detected by a local security measure, forcing it into hiding in order to “remain undetected”, which effectivelycauses it to never deploy.</p>
                        <p className='darkdemo'>Get Demo <img src={arrowG} className='arrowG' /></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ransomware