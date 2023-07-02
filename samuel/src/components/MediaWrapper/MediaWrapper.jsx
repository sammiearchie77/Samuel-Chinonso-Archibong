import { Dribble2 } from "../../icons/Dribble2"
import { Figma3 } from "../../icons/Figma3"
import { Github2 } from "../../icons/Github2"
import "./style.css"

export const MediaWrapper = ({ className }) => {
    return (
        <div className={`media-wrapper ${className}`}>
            <img
                className="line-stroke-2"
                alt="Line stroke"
                src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-10--stroke--1.svg"
            />
            <div className="frame-16">
                <Github2 className="icon-instance-node" />
                <Dribble2 className="icon-instance-node" />
                <Figma3 className="icon-instance-node" />
            </div>
        </div>
    );
}