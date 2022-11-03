import * as React from "react"

import Header from '../component/homepage/header/header'
import Homebanner  from "../component/homepage/homebanner/homebanner"
import Carouselcards from '../component/homepage/carouselcard/carouselcards'
import Services from '../component/homepage/services/services'
import Aboutus from '../component/homepage/aboutus/aboutus'
import Algolove from '../component/homepage/algolove/algolove'
import Certifications from "../component/homepage/certifications/certifications"
import Footer from '../component/homepage/footer/footer'

const IndexPage = () => {
  return (
    <>

       <div>
      <title>Algoritmik</title>
     <Header/>
     <Homebanner/>
     <Carouselcards/>
     <Services/>
     <Aboutus/>
     <Algolove/>
     <Certifications/>
     <Footer/>
    </div>
    </>
 
   
  )
}
export default IndexPage

