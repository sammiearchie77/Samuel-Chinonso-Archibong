import React from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from "../HeaderLink";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { Logo } from "../Logo";
import "./style.css";

export const Header = ({ className }) => {
    return (
        <div className={`header ${className}`}>
            <Link className="frame-14" to="/home">
                <Logo className="design-component-instance-node" style="default" />
                <div className="elias-3">BlackNight</div>
            </Link>
            <div className="frame-15">
                <HeaderLink stateProp="active" text="home" to="/home" />
                <HeaderLink stateProp="default" text="works" />
                <HeaderLink stateProp="default" text="about-me" />
                <HeaderLink stateProp="default" text="contacts" />
                <LanguageSwitcher stateProp="default" />
            </div>
        </div>
    );
};