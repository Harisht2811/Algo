import React from 'react'
import Phishing from '../component/phishing/phishingBeacon'
import Footer from '../component/homepage/footer/footer'
import Header from '../component/homepage/header/header'

function attacksurface() {
  return (
    <div>
     <Header/>
      <Phishing />
      <Footer />
    </div>
  )
}

export default attacksurface