import PropTypes from "prop-types";
import { Button } from "../Button";
import "./style.css"

export const Project = ({
    className,
    rectangle = "https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/rectangle-22-3.png",
    text = "HTML",
    text1 = "TailwindCSS",
    text2 = "Python",
    hasFlask = true,
    text3 = "ChertNodes",
    text4 = "Minecraft servers hosting",
    visible = true,
}) => {
    return (
        <div className={`project ${className}`}>
            <img
                className="rectangle" alt="Rectangle" src={rectangle} />
            <div className="frame-4">
                <div className="text-wrapper-2">{text}</div>
                <div className="text-wrapper-2">{text1}</div>
                <div className="text-wrapper-2">{text2}</div>
                {hasFlask && <div className="text-wrapper-2">Flask</div>}
            </div>
            <div className="frame-5">
                <div className="chertnodes">{text3}</div>
                <div className="minecraft-servers">{text4}</div>
                <div className="frame-6">
                    <Button stateProp="default" text="live &lt;~&gt;" type="primary" />
                    {visible && <Button stateProp="default" text1="Cached &gt;=" type="secondary" />} 
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {
    rectangle: PropTypes.string,
    text: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    hasFlask: PropTypes.bool,
    text3: PropTypes.string,
    text4: PropTypes.string,
    visible: PropTypes.bool
};