import React, { useState } from "react";
import "./Features.scss";

function Features() {
    const [playClicked, setPlayClicked] = useState(false);

    const handlePlay = () => {
        setPlayClicked(true);
    };

    return (
        <>
            <div className="features">
                <div className="container">
                    <div className="item">
                        <h1>The best part? Everything.</h1>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Stick to your budget
                        </div>
                        <p>
                            Find the right service for every price point. No
                            hourly rates, just project-based pricing.
                        </p>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Get quality work done quickly
                        </div>
                        <p>
                            Hand your project over to a talented freelancer in
                            minutes, get long-lasting results.
                        </p>

                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Pay when you're happy
                        </div>
                        <p>
                            Upfront quotes mean no surprises. Payments only get
                            released when you approve.
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Count on 24/7 support
                        </div>
                        <p>
                            Our round-the-clock support team is available to
                            help anytime, anywhere.
                        </p>
                    </div>
                    <div className="item">
                        {!playClicked && (
                            <div>
                                <img
                                    src="./img/thumbnail.png"
                                    alt="Video Thumbnail"
                                    onClick={handlePlay}
                                    style={{
                                        cursor: "pointer",
                                        width: "45rem",
                                    }}
                                />
                            </div>
                        )}
                        {playClicked && (
                            <video
                                src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
                                controls
                                autoPlay
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="service_container">
                    <h1>You need it, we've got it</h1>
                    <ul className="categories">
                        <li>
                            <img src="./img/graphics-design.svg" alt="" />
                            <br />
                            Graphics & Design
                        </li>
                        <li>
                            <img src="./img/marketing.svg" alt="" />
                            <br />
                            Digital Marketing
                        </li>
                        <li>
                            <img src="./img/translation.svg" alt="" />
                            <br />
                            Writting & Translation
                        </li>
                        <li>
                            <img src="./img/video.svg" alt="" />
                            <br />
                            Video & Animation
                        </li>
                        <li>
                            <img src="./img/music.svg" alt="" />
                            <br />
                            Music & Video
                        </li>
                        <li>
                            <img src="./img/tech.svg" alt="" />
                            <br />
                            Programming & Tech
                        </li>
                        <li>
                            <img src="./img/business.svg" alt="" />
                            <br />
                            Business
                        </li>
                        <li>
                            <img src="./img/lifestyle.svg" alt="" />
                            <br />
                            Lifestyle
                        </li>
                        <li>
                            <img src="./img/data.svg" alt="" />
                            <br />
                            Data
                        </li>
                        <li>
                            <img src="./img/photography.svg" alt="" />
                            <br />
                            Photography
                        </li>
                    </ul>
                </div>
            </div>
            <div className="features dark">
                <div className="container">
                    <div className="item">
                        <h1>
                            <span className="bold">riverr</span> business.{" "}
                            <span className="new_badge">NEW</span>
                        </h1>
                        <h1>
                            <span className="bold">A solution built for</span>{" "}
                            <i>business</i>
                        </h1>
                        <p>
                            Upgrade to a curated experience to access vetted
                            talent and exclusive tools
                        </p>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Talent matching
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Dedicated account management
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Team collaboration tools
                        </div>
                        <div className="title">
                            <img src="./img/check.png" alt="" />
                            Business payment solutions
                        </div>
                        <button>Explore Riverr Business</button>
                    </div>
                    <div className="item">
                        <img
                            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
