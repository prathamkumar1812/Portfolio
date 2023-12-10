import React from 'react'
import './about.css'
import Info from './Info'

function About() {
  return (
 <section className="about section" id="about">
    <h2 className="section__title">
     About Me
    </h2>
    <span className="section__subtitle">
        My Introduction
    </span>
    <div className="about__container container grid">
      <img src="/assets/4CFFFFB7-0458-4471-A29D-D98AF5433668_1_201_a.jpeg" alt="person" className="about__img" />
      <div className="about__data">
        <Info/>
        <p className="about__describtion">
            I am a web developer and designer. I have been working in this field for 1 year. I have worke
            on
            many projects.
        </p>
        <a download="" href="../../Pratham_kumar-cv.pdf" className="button button--flex">Download CV</a>
      </div>
    </div>
 </section>

  )
}

export default About