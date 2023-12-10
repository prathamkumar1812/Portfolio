import React from 'react'
import './contact.css'

function Contact() {
  return (
    <section className="section contact " id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">
                  Talk to me
                </h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">prathamkumar.mbd@gmail.com</span>
                        <a href="mailto:prathamkumar.mbd@gmail.com" className="contact__button">
                            Write me {" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                    <div className="contact__card">
                        <i className="bx bx-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">
                            +91 8899694540
                        </span>
                        <a href="https://api.whatsapp.com/send?phone=+918899694540&text=Hello, more information!" className="contact__button">
                            Write me {" "}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">
                    Write me your project
                </h3>
                <form className='contact__form'>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className="contact__form-input" 
                        placeholder='Insert your name'/>

                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className="contact__form-input" 
                        placeholder='Insert your Email'/>

                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label> 
                       <textarea name="project" cols="30" rows="10"
                       className='contact__form-input' placeholder='Write your project'></textarea>


                    </div>
                    <button
                    className='button button-flex'>
                        Say Hello
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact