import React from "react";
import "./Featured.scss";

function Featured() {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>
                        Find the right <span>freelance</span>
                        <br />
                        <span>service,</span> right away
                    </h1>
                    <div className="search">
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for any service..."
                            />
                        </div>
                        <button>
                            <img src="./img/search.svg" alt="" />
                        </button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>WordPress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured;
