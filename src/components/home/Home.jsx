import React from 'react'
import Social from './Social'
import './home.css'
import Data from './Data'
import Scrolldown from './Scrolldown'

function Home() {
  return (
   <section className='home-section ' id='#home'>
    <div className=' home-container container grid'>
        <div className='grid home-content'>
            <Social/>
            <div className="home-img">

            </div>
            <Data/> 
           
        </div>
        <Scrolldown/>
    </div>
   </section>
  )
}

export default Home