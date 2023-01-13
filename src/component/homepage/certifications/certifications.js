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
        <div className='heard'>
            <div className='securityIssues'>
                <div className='securityText'>
                <p id='titleIssues'>Heard enough? See it for yourself.</p>
                <p id='textIssues'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization.</p>
                </div>
                <button className='certificateButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
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


// import certificateData from "../../../content/certificationsData.json"
// function Certifications() {
//   const [buttonPopup, setButtonPopup] = useState(false);

//   return (
//     <>
//       {certificateData.map((item,index) => {
//         return <div key={index}>
//         <div className='algocertifications' >
//         <p id='titleCertificate'>{item.certificationsTitle}</p>
//         <p id='textCertificate'>{item.certificationsText}</p>
//           <div className='certificateImages'>
//           {item.certificateImages.map((item,index)=> {
//         return <img className='imgCertificates' key={index} src={item.image1} alt='certificates'></img>   
//         })}
       
//         </div>
//          <div className='heard'>
//              <div className='securityIssues'>
//                  <div className='securityText'>
//                  <p id='titleIssues'>{item.heardTitle}</p>
//                  <p id='textIssues'>{item.heardText}</p>
//                  </div>
//                  <button className='certificateButton' onClick={() => setButtonPopup(true)}>Enquire Now</button>
//              </div>
//          </div>
//          </div>
//          </div>
//         })}

//          <Popup trigger ={buttonPopup} setTrigger ={setButtonPopup}>
//       <p id='getintouch'>Get in touch with us </p>
//       <label>Name*</label>
//       <input className='Fname' type="text" ></input>
//       <label>Email*</label>
//       <input className='Femail' type="text" ></input>
//       <label>Mobile Number*</label>
//       <input className='Fphone' type="phone" ></input>
//       <button className='Fbutton'>Submit</button>    
//      </Popup>
//      </>
//   )
// }

// export default Certifications