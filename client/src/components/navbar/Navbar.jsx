import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isScrolling = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isScrolling);

        return () => {
            window.removeEventListener("scroll", isScrolling);
        };
    }, []);

    const currentUser = {
        id: 1,
        username: "Limenage",
        isSeller: true,
    };

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
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    <span>Sign In</span>
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                                alt=""
                            />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    {currentUser?.isSeller && (
                                        <>
                                            <span>Gigs</span>
                                            <span>Add New Gig</span>
                                        </>
                                    )}
                                    <span>Orders</span>
                                    <span>Messages</span>
                                    <span>Logout</span>
                                </div>
                            )}
                        </div>
                    )}
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
