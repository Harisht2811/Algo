import React from 'react'
import '../carouselcard/carouselcard.css'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { Link } from 'gatsby';
import Carouselcards1 from '../../../images/homepage/algohome2.png'
import Carouselcards2 from '../../../images/homepage/algohome3.png'
import Carouselcards3 from '../../../images/homepage/algohome4.png'
import Carouselcards4 from '../../../images/homepage/algohome5.png'
import Carouselcards5 from '../../../images/homepage/algohome6.png'
import Carouselcards6 from '../../../images/homepage/algohome7.png'
import Carouselcards7 from '../../../images/homepage/algohome8.png'
import Carouselcards8 from '../../../images/homepage/algohome9.png'
import whiteArow from '../../../images/homepage/algohome28.png'



function Carouselcards() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>

      <div className='carouselCards'>
        {/* <div className='innerCarousel'> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards1'>
                <p id='carouselTitletext'>Deep & Dark Web</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/deepdark'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>

              </div>

              <div className='innercarouselCards2'>
                <p id='carouselTitletext'>DDoS Technology Hardening</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoshardening'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards3'>
                <p id='carouselTitletext'>DDoS Incident Response</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddosincident'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>


              <div className='innercarouselCards4'>
                <p id='carouselTitletext'>3rd Party Cyber Risk</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/thirdparty'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

              <div className='innercarouselCards5'>
                <p id='carouselTitletext'>Attack Surface</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/attacksurface'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards6'>
                <p id='carouselTitletext'>Virtual Humint Operations</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/virtualhumint'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>

              <div className='innercarouselCards7'>
                <p id='carouselTitletext'>Ddos Attack Simulation Testing</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoscyber'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards1'>
                <p id='carouselTitletext'>Deep & Dark Web</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/deepdark'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>

              </div>

              <div className='innercarouselCards2'>
                <p id='carouselTitletext'>DDoS Technology Hardening</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoshardening'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>

              <div className='innercarouselCards3'>
                <p id='carouselTitletext'>DDoS Incident Response</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddosincident'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards4'>
                <p id='carouselTitletext'>3rd Party Cyber Risk</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/thirdparty'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

              <div className='innercarouselCards5'>
                <p id='carouselTitletext'>Attack Surface</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/attacksurface'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>

              <div className='innercarouselCards6'>
                <p id='carouselTitletext'>Virtual Humint Operations</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/virtualhumint'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards7'>
                <p id='carouselTitletext'>Ddos Attack Simulation Testing</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoscyber'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards1'>
                <p id='carouselTitletext'>Deep & Dark Web</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/deepdark'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>

              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>

              <div className='innercarouselCards2'>
                <p id='carouselTitletext'>DDoS Technology Hardening</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoshardening'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards3'>
                <p id='carouselTitletext'>DDoS Incident Response</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddosincident'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards4'>
                <p id='carouselTitletext'>3rd Party Cyber Risk</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/thirdparty'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>

              <div className='innercarouselCards5'>
                <p id='carouselTitletext'>Attack Surface</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/attacksurface'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

              <div className='innercarouselCards6'>
                <p id='carouselTitletext'>Virtual Humint Operations</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/virtualhumint'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards7'>
                <p id='carouselTitletext'>Ddos Attack Simulation Testing</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoscyber'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>



      <div className='carouselCardsRes'>
        {/* <div className='innerCarousel'> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards1'>
                <p id='carouselTitletext'>Deep & Dark Web</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/deepdark'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

              <div className='innercarouselCards2'>
                <p id='carouselTitletext'>DDoS Technology Hardening</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoshardening'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>


            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards3'>
                <p id='carouselTitletext'>DDoS Incident Response</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddosincident'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

              <div className='innercarouselCards4'>
                <p id='carouselTitletext'>3rd Party Cyber Risk</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/thirdparty'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>


            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards5'>
                <p id='carouselTitletext'>Attack Surface</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/attacksurface'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

              <div className='innercarouselCards6'>
                <p id='carouselTitletext'>Virtual Humint Operations</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/virtualhumint'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>


            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>


              <div className='innercarouselCards7'>
                <p id='carouselTitletext'>Ddos Attack Simulation Testing</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoscyber'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards1'>
                <p id='carouselTitletext'>Deep & Dark Web</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/deepdark'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>



            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>



              <div className='innercarouselCards2'>
                <p id='carouselTitletext'>DDoS Technology Hardening</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoshardening'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards3'>
                <p id='carouselTitletext'>DDoS Incident Response</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddosincident'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>


            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>

              <div className='innercarouselCards4'>
                <p id='carouselTitletext'>3rd Party Cyber Risk</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/thirdparty'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
              <div className='innercarouselCards5'>
                <p id='carouselTitletext'>Attack Surface</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/attacksurface'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>


            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>


              <div className='innercarouselCards6'>
                <p id='carouselTitletext'>Virtual Humint Operations</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/virtualhumint'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>

              <div className='innercarouselCards7'>
                <p id='carouselTitletext'>Ddos Attack Simulation Testing</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoscyber'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className='carouselCardsmobres'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards1'>
                <p id='carouselTitletext'>Deep & Dark Web</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/deepdark'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards2'>
                <p id='carouselTitletext'>DDoS Technology Hardening</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoshardening'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards3'>
                <p id='carouselTitletext'>DDoS Incident Response</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddosincident'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards4'>
                <p id='carouselTitletext'>3rd Party Cyber Risk</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/thirdparty'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards5'>
                <p id='carouselTitletext'>Attack Surface</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/attacksurface'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards6'>
                <p id='carouselTitletext'>Virtual Humint Operations</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/virtualhumint'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <div style={{ display: 'flex' }}>
              <div className='innercarouselCards7'>
                <p id='carouselTitletext'>Ddos Attack Simulation Testing</p>
                <p id='carouselText'>Algoritmik enables you to continuously monitor the organization’s 3rd party vendors’ security posture and effectively prioritize and mitigate risks.</p>
                <Link to='/ddoscyber'><img className='whiteArrow' src={whiteArow} alt='arrowimg'></img></Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Carouselcards