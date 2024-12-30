import React from "react";

export default function Main() {
    return (
        <div className="main-container">
            <div className="image-container">
                <img
                    src="./assets/loginbg 1.png"
                    alt="Purple Ribbon"
                    className="main-image"
                />
            </div>
            <div className="form-container">
                <div className="group">
                    <span className="text">Sign Up</span>
                    <div className="section">
                        <div className="input-group">
                            <div className="input-box">
                                <span className="icon email-icon"></span>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="input-field"
                                />
                            </div>
                            <div className="input-box">
                                <span className="icon password-icon"></span>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input-field"
                                />
                            </div>
                            <div className="input-box">
                                <span className="icon gender-icon"></span>
                                <input
                                    type="text"
                                    placeholder="Gender"
                                    className="input-field"
                                />
                            </div>
                        </div>
                        <button className="sign-up-button">Sign Up</button>
                        <div className="or-section">
                            <hr className="divider" />
                            <span>or</span>
                            <hr className="divider" />
                        </div>
                        <button className="google-sign-in">
                            <span className="google-icon"></span> Google
                        </button>
                    </div>
                    <div className="footer">
                        <span>Already have an account?</span>
                        <a href="#" className="log-in-link">
                            Log In
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
