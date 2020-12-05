import React from "react";

function Footer() {
    return (
        <footer className="text-light">
        <div className="footer-list-title">Social</div>
        <div className="footer-list-item">
            <span className="icon"><i className="fab fa-facebook"></i></span>
            <span className="icon"><i className="fab fa-github"></i></span>
            <span className="icon"><i className="fab fa-twitter-square"></i></span>
        </div>
        <p>Made with <i className="fa fa-heart animated pulse large" aria-hidden="true"></i> by <a href="https://github.com/mslee001" target="_blank">Megan Sleezer</a></p>
    </footer>
    )
}
export default Footer;