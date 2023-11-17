import React from 'react'
import {data}from './Data'
import './testimoinal.css'

function Testimoinal() {
  return (
   <section className="testimonial__container section">
    <h2 className="section__title">My Clients Say</h2>
    <span className='section__subtitle'>Testimonial</span>
    <div className="testimonials__container">
       {
        data.map((id,title,describtion)=>{
            return(
                <div key={id} className="testimonial__card">
                    <img src="" alt="" className='testimonial__img' />
                 <h3 className="testimonial__name">
                        {title}
                 </h3>
                 <p className="testimoinal__describtion">
                        {describtion}
                 </p>
                </div>
            )

        })
       }
    </div>
   </section>

  )
}

export default Testimoinal