import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState(false);

    const isScrolling = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isScrolling);

        return () => {
            window.removeEventListener("scroll", isScrolling);
        };
    }, []);

    return (
        <div className={active ? "navbar active" : "navbar"}>
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
            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <span>Test</span>
                        <span>Test2</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default Navbar;
