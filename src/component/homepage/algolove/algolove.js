import React from 'react'
import '../algolove/algolove.css'

import Algoimage from '../../../images/homepage/algohome17.png'
function carousel() {
  return (
    <>
    <div className='algoLove'>
      <img className='algoImg' src={Algoimage} alt='algoimages'></img>
        <div className='leftText'>
       <p id='titlealgotext'>Why our Clients Love <br></br><span id='blackText'>Algoritmik ?</span> </p>
       {/* <hr></hr> */}
       <p id='algotext'>Security issues that the penetration test uncovers should be reported to the system owner. Penetration test reports may also assess potential impacts to the organization and suggest countermeasures to reduce the risk.</p>
     
        </div>
        <div className='algoCards'>
          <div className='issueCard1'>
         <p id='numberText'>01</p>
         <p id='issueText'>Security issues that the penetration test uncovers should be reported to the system owner</p>
          </div>
          <div className='issueCard'>
         <p id='numberText'>02</p>
         <p id='issueText'>Security issues that the penetration test uncovers should be reported to the system owner</p>
          </div>
          <div className='issueCard1'>
         <p id='numberText'>03</p>
         <p id='issueText'>Security issues that the penetration test uncovers should be reported to the system owner</p>
          </div>
          
        </div>
    </div>
    </>
  )
}

export default carousel