import React from 'react'
import "./about.css";
import Image from "../../assets/martin_window.png";
import AboutBox from './AboutBox';
import Resume from '../../documents/230118_resume_seonghoon.pdf'

const About = () => {
    return(
        <section className="about container section" id='about'>
            <h2 className="section__title">About Me</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className="about__img" />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">Greetings! Welcome to my portfolio page. I am Seonghoon Park- don't worry. 
                            I have an English name for those of you that don't feel too comfortable speaking in Korean- you can also call me Martin.
                            I've been working as a Software Engineer at a start-up company based in Incheon, South Korea for the past 3 years.
                            I can deal with Object Oriented Programming (Python, preferably- Java and C++ are languages I'd have to google from time to time.),
                            as well as computer networking and system administration. You are more than welcome to take a look around this site to check out
                            a brief introduction to my career as a software engineer, and I'm open for small chats so feel free to contact me</p>
                        <a href={Resume} className="btn">Martin's Resume</a>
                    </div>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage python"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">C/C++</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage c_cpp"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Computer Networks</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage computernetworks"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Linux</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage linux"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">MySQL</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage mysql"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About
