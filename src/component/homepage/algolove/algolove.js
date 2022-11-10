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
            <p id='numberText'>01</p>
            <p id='issueText'>Security issues that the penetration test uncovers should be reported to the system owner</p>
          </div>
          <div className='animation2'>
            <p id='numberText'>02</p>
            <p id='issueText'>Security issues that the penetration test uncovers should be reported to the system owner</p>
          </div>
          <div className='animation3'>
            <p id='numberText'>03</p>
            <p id='issueText'>Security issues that the penetration test uncovers should be reported to the system owner</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default carousel