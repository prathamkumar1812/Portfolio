import React from 'react'

import './scrollup.css'
function ScrollUp() {
    window.addEventListener('scroll',()=>{
        const scrollup = document.querySelector('.scrollup');
        if(this.scrollY >= 200){
            scrollup.classList.add('show-scrollup')
        }else{
            scrollup.classList.remove('show-scrollup')
        }
    })
  return (
   <a href='#' className='scrollup'>
    <i className="uil uil-arrow-up scrollup_icon"></i>
   </a>
  )
}

export default ScrollUp