import React from 'react'
import '../algolove/algolove.css'

import Algoimage from '../../../images/homepage/algohome17.png'
import Algoimageres from '../../../images/homepage/algohome33.png'

function carousel() {
  return (
    <>
      <div className='algoLove'>
        <img className='algoImg' src={Algoimage} alt='algoimages'></img>
        <img className='algoImgRes' src={Algoimageres} alt='algoimages'></img>
        <div className='leftText'>
          <p id='titlealgotext'>Why our Clients Love <br></br><span id='blackText'>Algoritmik ?</span> </p>
          <hr id='hrinalgLove'></hr>
          <p id='algotext'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization and suggest countermeasures to reduce the risk.</p>

        </div>
        <div className='algoanimation'>
          <div className='animation1'>
            <p id='numberText'>Threat <br/>neutralized.</p>
            <p id='issueText'>“I was confident in the InfoSec system I had built — until Algoritmik revealed and neutralized multiple breach points and attack planes our international team hadn’t considered.”</p>
            <p className='addrs'>—Financial institution CIO*, <br/>Mexico</p>
          </div>
          <div className='animation2'>
            <p id='numberText'>Data <br/>secured.</p>
            <p id='issueText'>“Algoritmik protected our back-up system’s sensitive data, averting a breach that could have exposed the health care records of more than three million patients.”</p>
            <p className='addrs'>—Insurance company CISO*, <br/>USA</p>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default carousel


// import algoloveData from "../../../content/algoloveData.json"
// function Carousel() {
//   return (
//     <>
//       {algoloveData.map((item,index) =>{
//       return <div className='algoLove' key={index}>
//         <img className='algoImg' src={Algoimage} alt='algoimages'></img>
//         <img className='algoImgRes' src={Algoimageres} alt='algoimages'></img>
//         <div className='leftText'>
//           <p id='titlealgotext'>{item.algoloveTitle} <br></br><span id='blackText'>{item.algoloveTitle1}</span> </p>
//           <hr id='hrinalgLove'></hr>
//           <p id='algotext'>{item.algoText}</p>

//         </div>
//         <div className='algoanimation'>
//           <div className='animation1'>
//             <p id='numberText'>{item.issue1}</p>
//             <p id='issueText'>{item.issueText1}</p>
//           </div>
//           <div className='animation2'>
//             <p id='numberText'>{item.issue2}</p>
//             <p id='issueText'>{item.issueText2}</p>
//           </div>
//           <div className='animation3'>
//             <p id='numberText'>{item.issue3}</p>
//             <p id='issueText'>{item.issueText3}</p>
//           </div>

//         </div>
//       </div>
//       })}
//     </>
//   )
// }

// export default Carousel