import React from "react";
import { Dots } from "../../components/Dots";
import { Footer } from "../../components/Footer";
import { H } from "../../components/H";
import { Header } from "../../components/Header";
import { Media } from "../../components/Media";
import { MediaWrapper } from "../../components/MediaWrapper";
import { Discord1 } from "../../icons/Discord1";
import { Discord2 } from "../../icons/Discord2";
import { Email1 } from "../../icons/Email1";
import "./style.css";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="div-2">
        <div className="overlap">
          <div className="background">
            <Dots className="dots-instance" />
            <Dots className="design-component-instance-node" />
            <Dots className="frame-11" hasFrame={false} />
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
          <Footer
            className="footer-instance"
            icon={<Discord1 className="discord-1" />}
            line="https://generation-sessions.s3.amazonaws.com/4dbb482d02fdef1af26a1fb928b6999e/img/line-11.svg"
            lineClassName="discord-wrapper"
            logoStyleOutlineClassName="discord-1-wrapper"
          />
          <H className="h-2" text="all-media" />
          <Media className="media-instance" stateProp="default" />
          <Media className="media-2" stateProp="default" />
          <div className="contact">
            <div className="p-wrapper">
              <p className="p">
                I’m interested in employment opportunities. However, if you have other request or question, don’t
                hesitate to contact me
              </p>
            </div>
            <div className="group-2">
              <div className="frame-12">
                <div className="text-wrapper-2">Message me here</div>
                <div className="frame-13">
                  <Media icon={<Discord2 className="icon-instance-node-2" />} stateProp="default" text="Elias#1234" />
                  <Media
                    icon={<Email1 className="icon-instance-node-2" />}
                    stateProp="default"
                    text="elias@elias-dev.ml"
                  />
                </div>
              </div>
              <div className="frame-14">
                <div className="text-wrapper-3">Ring me here</div>
                <div className="text-wrapper-4">+2348103155891</div>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <div className="frame-15">
            <div className="text-wrapper-5">/</div>
            <div className="text-wrapper-6">contacts</div>
          </div>
          <div className="text-wrapper-7">Who am i?</div>
        </div>
        <Header className="header-instance" />
        <MediaWrapper
          className="media-3"
          lineStroke="https://generation-sessions.s3.amazonaws.com/4dbb482d02fdef1af26a1fb928b6999e/img/line-10--stroke--1.svg"
        />
      </div>
    </div>
  );
};
