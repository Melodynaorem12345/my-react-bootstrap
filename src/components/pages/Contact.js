import React from "react";
import { Link } from "react-router-dom";
import VMC from "./inc/VMC";

function Contact() {
    return (
        <div>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Contact Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6>Home / Contact Us</h6>
                        </div>
                    </div>
                </div>
            </section>

             <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2>Contact Form</h2>
                                    <hr />
                                    <div className="form-group mb-3">
                                        <label className="mb-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your full name"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="mb-1">Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Enter your full name"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="mb-1">Email</label>
                                        <input type="text" className="form-control" placeholder="Enter your full name"/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your message"></textarea>
                                    </div>
                                      <div className="form-group">
                                        <button type="button" className="btn btn-primary shadow w-100">Send Message</button>
                                    </div>
                                </div>
                                <div className="col-md-6 border-start">
                                    <h5 className="main-heading">Contact Information</h5>
                                    <div className="underline"></div>
                                    <div><p className="text-dark mb-1">ghgdfszcxvfcbghjklkjghf hgfdxghjk hgjfdxcv</p></div>
                                    <div><p className="text-dark mb-1">ghgdfszcxvfcbghjklkjghf hgfdxghjk hgjfdxcv</p></div>
                                    <div><p className="text-dark mb-1">ghgdfszcxvfcbghjklkjghf hgfdxghjk hgjfdxcv</p></div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;