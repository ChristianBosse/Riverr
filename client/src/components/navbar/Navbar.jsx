import React from "react";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <span className="text">Riverr</span>
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
