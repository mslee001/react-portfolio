import React from "react";

function Home() {

    return (
        <div>
        <div id="splash-img" className="hero fullscreen hero-img parallax-img">
        <div className="hero-body">
            <div className="content u-text-center">
                <div>
                    <h1 className="uppercase white title">Welcome to Megan's Portfolio</h1>
                    <h3 className="uppercase white sub-title faded">Please enter</h3>
                </div>
                <a href="/react-portfolio/#/about" className="u-inline-block">
                    <button className="btn-light outline">
                        About Me
                    </button>
                </a>
                <a href="/react-portfolio/#/projects" className="u-inline-block">
                    <button className="btn-light outline">
                        Projects
                    </button>
                </a>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Home;