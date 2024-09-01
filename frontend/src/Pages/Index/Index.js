import React, { useEffect } from 'react'
import './Index.css'
import Header from '../../Components/Header/Header'
import HowWorks from '../../Components/HowWorks/HowWorks'
import FindHome from '../../Components/FindHome/FindHome'
import MostTrendingProperties from '../../Components/MostTrendingProperties/MostTrendingProperties'
import HeadersSections from '../../Components/HeadersSection/HeadersSections'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Footer from '../../Components/Footer/Footer'
import BecomeARealEstate from '../../Components/BecomeARealEstate/BecomeARealEstate'

export default function Index() {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div>
      <Header />
      <HowWorks />
      <FindHome />
      <MostTrendingProperties />
      <HeadersSections title='What our customers say’s'
       desc='It is a long established fact that a reader will be distracted by the readable 
         content of a page when looking at its layout.' />
      <Testimonial />
     <BecomeARealEstate />
      <Footer />
    </div>
  )
}


