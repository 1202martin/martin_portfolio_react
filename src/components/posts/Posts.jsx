import React from 'react'
import "./posts.css";
import Img1 from "../../assets/blog-1.svg"


const Posts = () => {
    return(
        <section className="post container section" id="posts">
            <h2 className="section__title">Posts</h2>

            <div className="post__container grid">
                <div className="post__card">
                    <div className="post__thumb">
                        <a href="#"><span className="post__category">Study</span></a>
                        <a href="#"><img src={Img1} alt="" className="post__img" /></a>
                        <div className="post__details">
                            <h3 className="post__title">The Posts Page is Yet to Come!</h3>
                            <div className="post__meta">
                                <span>Thank you for your patience!</span>
                                <span className="post__dot">.</span>
                                <span>Martin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Posts
