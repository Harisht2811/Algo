import React from 'react'

import Header from '../component/homepage/header/header'
import Algoaboutbanner from '../component/algoaboutus/algoaboutbanner/algoaboutbanner'
import Algoabout from '../component/algoaboutus/algoabout/algoabout'
import Algoculture from '../component/algoaboutus/algoculture/algoculture'
import Footer from '../component/homepage/footer/footer'
function aboutus() {
  return (
    <>
    <Header/>
    <Algoaboutbanner/>
    <Algoabout/>
    <Algoculture/>
    <Footer/>
    </>
  )
}

export default aboutus