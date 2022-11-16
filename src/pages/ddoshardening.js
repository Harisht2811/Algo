import React from 'react'
import Ddos from '../component/ddoshardening/ddoshardening'
import Footer from '../component/homepage/footer/footer'
import Header from '../component/homepage/header/header'

function attacksurface() {
  return (
    <div>
     <Header/>
      <Ddos/>
      <Footer />
    </div>
  )
}

export default attacksurface