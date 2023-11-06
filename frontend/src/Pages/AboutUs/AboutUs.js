import React from 'react'
import './AboutUs.css'
import Footer from '../../Components/Footer/Footer'
import HeaderPage from '../../Components/HeaderPage/HeaderPage'
import { Link } from 'react-router-dom'
import ReadyToBuy from '../../Components/ReadyToBuy/ReadyToBuy'
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb'


export default function AboutUs() {
  console.log('about us');
  return (
    <>
    
    <HeaderPage  pageTitle='About Us' imgPath='./Images/architect-firm-03.jpg'> 
     <BreadCrumb currentRout='About Us' />
    </HeaderPage>

      <div className='container pt-100'>
        <div className='row w-80 justify-content-center flex-column flex-lg-row' style={{flexWrap : 'nowrap'}}>
          <div className='col-lg-4' style={{marginRight : '43px'}}>
            <div className='d-flex flex-column find-perfect-space'>
              <img src='./Images/real-estate-illustration-01-1.png' alt='THE PERFECT SPACE' title='THE PERFECT SPACE' />
              <p className='text-center mb-2'>WE'LL FIND YOU THE PERFECT SPACE</p>
              <span className='text-center'>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</span>
            </div>
          </div>
          <div className='col-lg-4 '>
            <div className='d-flex flex-column find-perfect-space'>
              <img src='./Images/real-estate-illustration-03-3.png' alt='THE PERFECT SPACE' title='THE PERFECT SPACE' />
              <p className='text-center mb-2'>WE WORK WITH YOUR BUDGET</p>
              <span className='text-center'>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</span>
            </div>
          </div>
          <div className='col-lg-4 ' style={{marginLeft : '43px'}}>
            <div className='d-flex flex-column find-perfect-space'>
              <img src='./Images/real-estate-illustration-02-1.png' alt='THE PERFECT SPACE' title='THE PERFECT SPACE' />
              <p className='text-center mb-2'>LIST YOUR PROPERTY RISK FREE</p>
              <span className='text-center'>Quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-light'>
         <div className='container'>
          <div className='row'>
            <div className='col-12'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
             <div className='col-lg-7'>
             <h2 className='title-story mb-3 text-center'>Our Story</h2>
         <p className='text-center paragraph-story'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. </p>
             </div>
           </div>
            </div>
          </div>
         </div>
      </div>

     <div className='expert-agents'>
      <div className='container'>
        <div className='row justify-content-center gap-5'>
          <div className='col-10'>
            <h2 className='mb-5 text-center' style={{fontWeight : '600' , fontSize : '35PX'}}>Expert Agents</h2>
            <div className='our-agents'>
              <div className='row gap-4 justify-content-center flex-column flex-lg-row' style={{flexWrap : 'nowrap'}}>
                <div className='col-lg-3 text-center'>
                  <div className='flex flex-column justify-content-center'>
                    <img className='img-fluid mb-5' src='./Images/portrait-square-03.jpg' alt='our agents' title='our agents' style={{width:'100px' , height:'100px' , borderRadius:'100%'}} />
                    <h5>Robert Hendz</h5>
                    <span style={{color: '#666'}}>Commercial Real Estate</span>
                  </div>
                </div>
                <div className='col-lg-3 text-center'>
                  <div className='flex flex-column justify-content-center'>
                    <img className='img-fluid mb-5' src='./Images/portrait-square-11.jpg' alt='our agents' title='our agents' style={{width:'100px' , height:'100px' , borderRadius:'100%'}} />
                    <h5>Loreen James</h5>
                    <span style={{color: '#666'}}>Residential Real Estate</span>
                  </div>
                </div>
                <div className='col-lg-3 text-center'>
                  <div className='flex flex-column justify-content-center'>
                    <img className='img-fluid mb-5' src='./Images/portrait-square-05.jpg' alt='our agents' title='our agents' style={{width:'100px' , height:'100px' , borderRadius:'100%'}} />
                    <h5>Mike Brenson</h5>
                    <span style={{color: '#666'}}>Residential Real Estate</span>
                  </div>
                </div>
                <div className='col-lg-3 text-center'>
                  <div className='flex flex-column justify-content-center'>
                    <img className='img-fluid mb-5' src='./Images/portrait-square-10.jpg' alt='our agents' title='our agents' style={{width:'100px' , height:'100px' , borderRadius:'100%'}} />
                    <h5>Brett Slater</h5>
                    <span style={{color: '#666'}}>Commercial Real Estate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Link to='#' className='contact-agent-btn'><button className='btn  agent-btn'>Contact An Agent</button></Link>
        </div>
      </div>
     </div>

       <ReadyToBuy title='Start your search today' />
     
     <Footer />
    </>
  )
}
