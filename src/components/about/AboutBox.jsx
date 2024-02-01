import React from 'react'
import Karate from '../../assets/karate.png'
import Cooking from '../../assets/cooking.png'
import MBTI from '../../assets/personality.png'
import Network from '../../assets/global-network.png'

const AboutBox = () => {
    return(
        <div className="about__boxes grid">
            <div className="about__box">
                <img src={Karate} alt="" className="about__icon icon_karate"></img>

                <div>
                    <h3 className="about__title">Passion</h3>
                    <span className="about__subtitle">Martial Arts</span>
                </div>
            </div>

            <div className="about__box">
                <img src={Cooking} alt=""  className="about__icon icon_cook"></img>

                <div>
                    <h3 className="about__title">Hobby</h3>
                    <span className="about__subtitle">Cooking & Eating</span>
                </div>
            </div>

            <div className="about__box">
                <img src={MBTI} alt=""  className="about__icon icon_cook"></img>

                <div>
                    <h3 className="about__title">MBTI</h3>
                    <span className="about__subtitle">ISFP</span>
                </div>
            </div>

            <div className="about__box">
                <img src={Network} alt=""  className="about__icon icon_cook"></img>

                <div>
                    <h3 className="about__title">Interests</h3>
                    <span className="about__subtitle">Computer Network & Security</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox