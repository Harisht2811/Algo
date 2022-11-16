import React, { useState } from 'react'
import '../algoculture/algoculture.css'
import Carousel from 'react-bootstrap/Carousel';

function Algoculture() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className='algoculture'>
        <p id='algocultureText'><span id='coloraboutText'>The Culture </span>&Office</p>

        <div className='algoaboutCarousel'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={3000}>
              <div style={{ display: 'flex' }}>
                <div className='carouselImg1'>

                </div>
                <div className='carouselImg2'>

                </div>
                <div className='carouselImg3'>

                </div>
                <div className='carouselImg4'>

                </div>
                <div className='carouselImg5'>

                </div>

              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div style={{ display: 'flex' }}>
                <div className='carouselImg1'>

                </div>
                <div className='carouselImg2'>

                </div>
                <div className='carouselImg3'>

                </div>
                <div className='carouselImg4'>

                </div>
                <div className='carouselImg5'>

                </div>

              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div style={{ display: 'flex' }}>
                <div className='carouselImg1'>

                </div>
                <div className='carouselImg2'>

                </div>
                <div className='carouselImg3'>

                </div>
                <div className='carouselImg4'>

                </div>
                <div className='carouselImg5'>

                </div>

              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div style={{ display: 'flex' }}>
                <div className='carouselImg1'>

                </div>
                <div className='carouselImg2'>

                </div>
                <div className='carouselImg3'>

                </div>
                <div className='carouselImg4'>

                </div>
                <div className='carouselImg5'>

                </div>

              </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div style={{ display: 'flex' }}>
                <div className='carouselImg1'>

                </div>
                <div className='carouselImg2'>

                </div>
                <div className='carouselImg3'>

                </div>
                <div className='carouselImg4'>

                </div>
                <div className='carouselImg5'>

                </div>

              </div>
            </Carousel.Item>



          </Carousel>
        </div>
        <p id='cultureText'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets. With Algoritmik’s Deep Dive Investigations.</p>
        <div className='meetourTeam'>
          <p id='ourteamText'>Meet our team</p>
          <div className='ourteamProfile'>
            <div className='profile1'>


            </div>
            <div className='profile2'>

            </div>
            <div className='profile3'>

            </div>
            <div className='profile4'>

            </div>

          </div>
          <div className='ourteamProfileText'>
            <div className='profileText1'>
              <p id='nameText'>Andrew </p>
              <p id='speccialist'>Head of Cyber Attack</p>

            </div>
            <div className='profileText2'>
              <p id='nameText'>Simon </p>
              <p id='speccialist'>DDOS Expert</p>
            </div>
            <div className='profileText3'>
              <p id='nameText'>Edwin </p>
              <p id='speccialist'>Phishing Expert</p>
            </div>
            <div className='profileText4'>
              <p id='nameText'>Melina </p>
              <p id='speccialist'>Pentesting Head</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Algoculture