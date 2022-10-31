import React from 'react'
import '../carouselcard/carouselcard.css'

import Carouselcards1 from '../../../images/homepage/algohome2.png'
import Carouselcards2 from '../../../images/homepage/algohome3.png'
import Carouselcards3 from '../../../images/homepage/algohome4.png'
import Carouselcards4 from '../../../images/homepage/algohome5.png'
import Carouselcards5 from '../../../images/homepage/algohome6.png'
import Carouselcards6 from '../../../images/homepage/algohome7.png'
import Carouselcards7 from '../../../images/homepage/algohome8.png'
import Carouselcards8 from '../../../images/homepage/algohome9.png'
import whiteArow from '../../../images/homepage/algohome28.png'



function carousel() {
  return (
    <>
      <div className='carouselCards'>
        <div className='innercarouselCards1'>
          <p id='carouselTitle'>DDoS Hardening</p>
          <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
          <img className='whiteArrow' src={whiteArow} alt='arrowimg'></img>
        </div>
        <div className='innercarouselCards2'>
          <p id='carouselTitle'>3rd Party Cyber Risk</p>
          <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
          <img className='whiteArrow' src={whiteArow} alt='arrowimg'></img>
        </div>
        <div className='innercarouselCards3'>
          <p id='carouselTitle'>Attack Surface</p>
          <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
          <img className='whiteArrow' src={whiteArow} alt='arrowimg'></img>
        </div>
        <div className='innercarouselCards4'>
          <p id='carouselTitle'>DDoS Hardening</p>
          <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
          <img className='whiteArrow' src={whiteArow} alt='arrowimg'></img>
        </div>
        <div className='innercarouselCards5'>
          <p id='carouselTitle'>DDoS Hardening</p>
          <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
          <img className='whiteArrow' src={whiteArow} alt='arrowimg'></img>
        </div>

      </div>
    </>
  )
}

export default carousel