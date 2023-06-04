import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    {/* <Link to="/"> */}
                    <span className="text">riverr</span>
                    {/* </Link> */}
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Riverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Become a Seller</span>
                    <span>Sign In</span>
                    <button>Join</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
