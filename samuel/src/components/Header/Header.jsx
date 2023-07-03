import React from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from "../HeaderLink";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Logo } from "../Logo";
import "./style.css";

export const Header = ({ className }) => {
    return (
        <div className={`header ${className}`}>
            <Link className="frame-14" to="/">
                <Logo className="design-component-instance-node" style="default" />
                <div className="elias-3">BlackNight</div>
            </Link>
            <div className="frame-15">
                <HeaderLink stateProp="active" text="home" to="/" />
                <HeaderLink stateProp="default" text="projects" to="projects" />
                <HeaderLink stateProp="default" text="about-me" to="about-me"/>
                <HeaderLink stateProp="default" text="contact-me" to="contact-me"/>
                <LanguageSwitcher stateProp="default" />
            </div>
        </div>
    );
};