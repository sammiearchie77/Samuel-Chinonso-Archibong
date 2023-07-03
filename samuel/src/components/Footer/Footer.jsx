/* eslint-disable react/style-prop-object */
import React from "react";
import { Discord1 } from "../../icons/Discord1";
import { Figma3 } from "../../icons/Figma3";
import { Github2 } from "../../icons/Github2";
import { Logo } from "../Logo";
import "./style.css";

let today = new Date();

export const Footer = ({ className }) => {
    return (
        <div className={`footer ${className}`}>
            <img
                className="line-2"
                alt="Line"
                src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-11-1.svg"
            />
            <div className="frame-7">
                <div className="frame-8">
                    <div className="frame-9">
                        <div className="frame-10">
                            <div className="frame-11">
                                <Logo className="logo-instance" style="default" />
                                <div className="elias-2">BlackNight</div>
                            </div>
                            <div className="elias-elias-dev-ml">chinonsosamuel29@gmail.com</div>
                            <p className="web-designer-and">Software Engineer</p>
                        </div>
                        <div className="frame-12">
                            <div className="media-2">Media</div>
                            <div className="group">
                                <Github2 className="github" />
                                <Figma3 className="figma" />
                                <Discord1 className="discord" />
                            </div>
                        </div>
                    </div>
                    <p className="copyright-made">@ Copyright {today.getFullYear()} SE - Archibong</p>
                </div>
            </div>
        </div>
    );
};