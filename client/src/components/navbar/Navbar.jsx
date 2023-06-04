import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

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
        <div
            className={active || pathname !== "/" ? "navbar active" : "navbar"}
        >
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className="text">riverr</span>
                    </Link>
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
                                            <Link className="link" to="/mygigs">
                                                Gigs
                                            </Link>
                                            <Link className="link" to="/add">
                                                Add New Gig
                                            </Link>
                                        </>
                                    )}
                                    <Link className="link" to="/orders">
                                        Orders
                                    </Link>
                                    <Link className="link" to="/messages">
                                        Messages
                                    </Link>
                                    <Link className="link" to="/">
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            {active ||
                (pathname !== "/" && (
                    <>
                        <hr />
                        <div className="menu">
                            <Link className="link menuLink" to="/">
                                Graphics & Design
                            </Link>
                            <Link className="link " to="/">
                                Video & Animation
                            </Link>
                            <Link className="link " to="/">
                                Writting & Translation
                            </Link>
                            <Link className="link " to="/">
                                AI Services
                            </Link>
                            <Link className="link " to="/">
                                Digital Marketing
                            </Link>
                            <Link className="link " to="/">
                                Music & Audio
                            </Link>
                            <Link className="link " to="/">
                                Programming & Tech
                            </Link>
                            <Link className="link " to="/">
                                Business
                            </Link>
                            <Link className="link " to="/">
                                Lifestyle
                            </Link>
                        </div>
                    </>
                ))}
        </div>
    );
}

export default Navbar;
