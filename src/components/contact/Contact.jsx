import React from 'react';
import "./contact.css";


const Contact = () => {
    return(
        <section className="contact container section" id='contact'>
            <h2 className="section__title">Contact Martin</h2>
            <div className="contact__container grid">
                <div className="contct__info">
                    <h2 className="contact__title">Feel free to reach out 😃</h2>
                    <p className="contact__title">Languages Spoken: 🇺🇲 🇰🇷</p>
                    <div className="contact__container card">
                        <p className="contact__details">✉️: martin941079@gmail.com</p>
                        <p className="contact__details">☎️: 82) 010-5833-0162</p>
                    </div>
                </div>

                {/* <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Your name'/>
                        </div>
                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder='Your email'/>
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder='Topic'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" rows="10" className='contact__form-input' placeholder='Context:'></textarea>
                    </div>

                    <button className='btn submitButton'>Submit</button>
                </form> */}
            </div>
        </section>
    )
}

export default Contact
