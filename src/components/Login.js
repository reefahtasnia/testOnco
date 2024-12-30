import React from "react";
import ArrowLeft  from "./assets/ArrowLeft.png";
import group427320702 from "./assets/group-427320702.png";
import group from "./assets/group.png";
import image from "./assets/image.png";
import line48 from "./assets/line-48.svg";
import line49 from "./assets/line-49.svg";
import loginpgbg1 from "./assets/loginpgbg-1.png";
import "./CSS/style.css";

export const LogIn = () => {
    return (
        <div className="log-in">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="loginpgbg" alt="Loginpgbg" src={loginpgbg1} />

                    <div className="form">
                        <div className="group">
                            <img className="arrow-left" alt="Arrow Left" src={ArrowLeft} />
                        </div>

                        <div className="text-wrapper">Log In</div>

                        <div className="frame">
                            <div className="div">
                                <div className="frame-2">
                                    <div className="frame-3">
                                        <div className="frame-4">
                                            <div className="frame-5">
                                                <img className="img" alt="Group" src={group} />

                                                <div className="following">Your email</div>
                                            </div>

                                            <div className="frame-6">
                                                <img className="group-2" alt="Group" src={image} />

                                                <div className="following">Password</div>
                                            </div>

                                            <div className="frame-7">
                                                <div className="group-3" />

                                                <div className="following-2">User Type</div>
                                            </div>
                                        </div>

                                        <div className="following-wrapper">
                                            <div className="following-3">Log In</div>
                                        </div>
                                    </div>

                                    <div className="div-wrapper">
                                        <div className="following-4">Forgot password?</div>
                                    </div>
                                </div>

                                <div className="frame-8">
                                    <div className="frame-9">
                                        <img className="line" alt="Line" src={line48} />

                                        <div className="following-5">or</div>

                                        <img className="line" alt="Line" src={line49} />
                                    </div>

                                    <div className="frame-wrapper">
                                        <div className="frame-10">
                                            <img
                                                className="group-4"
                                                alt="Group"
                                                src={group427320702}
                                            />

                                            <div className="following-6">Google</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="frame-11">
                                <div className="following-7">Don’t have an account?</div>

                                <div className="following-4">Sign Up</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LogIn;