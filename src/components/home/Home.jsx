import React from 'react'
import "./home.css";
import Me from "../../assets/martin_chair.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return(
        <section className="home container" id="home">
            <div className='intro'>
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Seonghoon Martin Park</h1>
                <span className="home__education">Software Engineer at IDCITI</span>

                <HeaderSocials />

                <a href="#contact" className='btn'>Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home
