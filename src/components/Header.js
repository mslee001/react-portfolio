import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {

    const location = useLocation();

    return (
        <header>
            <div className="header header-animated text-light">
                <div className="header-brand">
                    <div className="nav-item no-hover">
                        <a href="/react-portfolio/#"><h6 className="title">Megan Sleezer</h6></a>
                    </div>
                    <div className="nav-item nav-btn" id="header-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="header-nav" id="header-menu">
                    <div className="nav-right">
                        <div className="nav-item text-center">
                            <Link to="/" className={location.pathname === "/" ? "nav-item active" : "nav-item"}>
                                Home
                            </Link>
                        </div>
                        <div className="nav-item">
                        <Link to="/about" className={location.pathname === "/About" ? "nav-item active" : "nav-item"}>
                                About
                            </Link>
                        </div>
                        <div className="nav-item">
                        <Link to="/projects" className={location.pathname === "/Projects" ? "nav-item active" : "nav-item"}>
                                Projects
                            </Link>
                        </div>
                        <div className="nav-item">
                        <Link to="/contact" className={location.pathname === "/Contact" ? "nav-item active" : "nav-item"}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;