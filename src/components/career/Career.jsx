import React from 'react'
import "./career.css";
import Data from './Data';
import Card from './Card';


const Career = () => {
    return(
        <section className="career container section" id="career">
            <h2 className="section__title">My Career</h2>

            <div className="career__container grid">
                <div className="timeline grid">
                    {Data.map((val,id) => {
                        if (val.category === "education") {
                            return (
                                <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
                            )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((val,index) => {
                        if (val.category === "experience") {
                            return (
                                <Card key={index} icon={val.icon} title={val.title} year={val.year} desc={val.desc}/>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Career
