import React from 'react'
import '../certifications/certifications.css'
import { useState } from 'react'
import Popup from '../../getdemo/getdemo'
import Certificate1 from '../../../images/homepage/algohome18.png'
import Certificate2 from '../../../images/homepage/algohome19.png'
import Certificate3 from '../../../images/homepage/algohome20.png'
import Certificate4 from '../../../images/homepage/algohome21.png'
import Certificate5 from '../../../images/homepage/algohome22.png'


function Certifications() {
 const [buttonPopup, setButtonPopup] =useState(false);

  return (
    <>
    <div className='algocertifications'>
       <p id='titleCertificate'>Our Certifications</p>
       <p id='textCertificate'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess.</p>
       <div className='certificateImages'>
        <img className='imgCertificates' src={Certificate1} alt='certificates'></img>
        <img className='imgCertificates' src={Certificate2} alt='certificates'></img>
        <img className='imgCertificates' src={Certificate3} alt='certificates'></img>
       
        {/* <div className='certificaterRes'> */}
        <img className='imgCertificates' src={Certificate4} alt='certificates'></img>
        <img className='imgCertificates' src={Certificate5} alt='certificates'></img>
        {/* </div> */}
       
       
       </div>
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

export default Certifications