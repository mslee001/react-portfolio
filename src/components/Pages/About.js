import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function About() {
    return (
        <div>
            <Header /> 
            <section className="section content">
                <div className="row">
                    <div className="col-12"></div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img src="assets/bio-pic-sm.jpg" className="u-center img-stretch" alt="This is a headshot of Megan Sleezer." />
                    </div>
                    <div className="col-6">
                        <h5>Contact Information</h5>
                        <ul>
                            <li>Full Name: Megan Sleezer</li>
                            <li>Email: megan.sleezer@gmail.com</li>
                            <li>Phone: (360) 292-9873</li>
                            <li><span className="usquare"><a className="utb utb-OLR" target="_blank" href="https://github.com/mslee001">Github</a></span>
                                <span className="usquare"><a className="utb utb-OLR" target="_blank" href="https://www.linkedin.com/in/megan-sleezer-664935116/">LinkedIn</a></span>
                                <span className="usquare"><a className="utb utb-OLR" target="_blank" href="assets/Megan Sleezer Resume 09-04-2020.pdf">Resume</a></span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="row">
                    <div className="col-12 u-box content">
                        <h5>Bio</h5>
                        <p className="card-text">Army veteran, mother, avid technology buff. </p>
                        <p className="card-text">Probably my greatest strength is just the love of figuring things out. When I was 15, I cracked the case of the family computer to replace our 28k modem with a 56k modem. There were no instructions and no previous knowledge of the task. I’m sure there are plenty of people of my generation who may have a similar story, but for me, this was the catalyst of my lifelong obsession with learning new things.</p>
                        <p className="card-text">Spending four years in the Army starting at the tender age of 17, whether at my home base at Ft. Lewis, Washington or during my deployment to Iraq, taught me the true meaning of teamwork. Continuing on my learning path and my desire to learn everything I can as fast as I can learn it, I attained the rank of E5 (Sergeant) during my short stint. </p>
                        <p className="card-text">Returning to civilian life, the importance of education and my love of working on and with computers lead me to earn a Bachelor of Science Information Technology degree. My passion for learning has never waned since swapping out that modem. After spending a few years supporting software developed by others, it’s time to learn everything about developing it myself, as fast as I can.</p>
                        <p className="card-text">Away from work and hobbies, including building custom computer systems to simplify our time at home, I very much enjoy spending time outside, hiking and exploring with my four children and my partner. </p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;