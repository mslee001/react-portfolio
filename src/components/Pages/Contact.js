import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Contact() {
    return(
        <div>
            <Header />
            <div className="content u-box">
                    <div className="form-section">
                        <label className="font-bold">Contact</label>
                        <div className="section-body row u-no-padding">
                            <div className="col-6">
                                <div className="input-control">
                                    <input className="input-contains-icon-left input-small" type="text" placeholder="Name" />
                                    <span className="icon icon-left"><i className="fa fa-wrapper fa-user"></i></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="input-control">
                                    <input className="input-contains-icon-left input-small" type="text" placeholder="Email" />
                                    <span className="icon icon-left"><i className="fa fa-wrapper fa-envelope"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-section">
                        <label className="font-bold label-small">Message</label>
                        <div className="row">
                            <textarea placeholder="Enter your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn-dark u-center"/>
                </div>
                <Footer />
        </div>
    )
};

export default Contact;