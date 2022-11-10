import React from 'react'
import Ddoscyberbanner from '../../images/ddoscyber/ddoscyberbanner.png'
import Arrow from '../../images/ddoscyber/arrow.png'
import Tick from '../../images/ddoscyber/tick.png'
import Hexagon from '../../images/ddoscyber/hexagon.png'
import './ddoscyber.css'

function ddoscyber() {
  return (
    <div>
      <div className='cyberBannerImg'>
        <p className='cyberTitle1'><sapn className='colorText'>Get the Intelligence</sapn> You Need,<br></br>When You Need It</p>
          <div className='cyberTitleFlex'>
             <div className='Arrow'>
              <img src={Arrow}></img>
              <p>Strategic Threat Intelligence</p>
              </div>
              <div className='Tick'>
                <img src={Tick}></img>
                <p>Threat Actor Profiling</p>
              </div>
              <div className='Hexagon'>
                <img src={Hexagon}></img>
                <p>Threat Landscape Reports</p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default ddoscyber