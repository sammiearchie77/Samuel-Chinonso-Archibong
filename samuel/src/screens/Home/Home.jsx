import React from "react";
import { Block } from "../../components/Block";
import { Button } from "../../components/Button";
import { Dots } from "../../components/Dots";
import { Footer } from "../../components/Footer";
import { H } from "../../components/H";
import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Media } from "../../components/Media";
import { MediaWrapper } from "../../components/MediaWrapper";
import { Project } from "../../components/Project";
import { Email1 } from "../../icons/Email1"
import "./style.css";
import { Twitter } from "../../icons/Twitter";
import BlackNight from "../../img/blacknight.png"

export const Home = () => {
  return (
    <div className="home">
      <div className="div-2">
        <div className="overlap">
          <div className="background">
            <Dots className="dots-instance" />
            <Dots className="frame-17" />
            <Dots className="frame-18" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
          <div className="contact">
            <H
              className="h-2"
              lineStroke="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-7--stroke--5.svg"
              lineStrokeClassName="h-instance"
              text="contacts"
            />
            <div className="p-wrapper">
              <p className="p">
                I’m interested in employment opportunities. However, if you have other request or question, don’t
                hesitate to contact me
              </p>
            </div>
            <div className="frame-wrapper">
              <div className="frame-19">
                <div className="text-wrapper-3">Message me here</div>
                <div className="frame-20">
                  <Media icon={<Twitter className="icon-instance-node-2" />} stateProp="default" text="@geecoding" />
                  <Media icon={<Email1 className="icon-instance-node-2" />} stateProp="default" text="chinonsosamuel28@gmail.come" />
                </div>
              </div>
            </div>
          </div>
          <div className="about-me">
            <div className="about-me-2">
              <p className="hello-i-m-elias-i-m">
                Samuel Chinonso <strong>ARCHIBONG</strong>!
                <br />
                <br />
                I am software engineer based in Onne, Rivers state. I can develop responsive websites from
                scratch and raise them into modern user-friendly web experiences. <br />
                <br />
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
                been helping various clients to establish their presence online. I always strive to learn about the
                newest technologies and frameworks.
              </p>
              <Button className="button-instance" stateProp="default" text="Read more -&gt;" type="primary" />
            </div>
            <H
              className="h2-instance"
              lineStroke="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-7--stroke--4.svg"
              lineStrokeClassName="group-2"
              text="about-me"
            />
            <div className="group-3">
              <div className="overlap-group-3">
                <img
                  className="image"
                  alt="About"
                  src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/image-1.png"
                />
                <Dots className="frame-21" />
                <Dots className="frame-22" hasFrame={false} />
              </div>
              <img
                className="line-stroke-3"
                alt="Line stroke"
                src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-7--stroke--3.svg"
              />
            </div>
          </div>
          <div className="skills">
            <H
              className="group-4"
              lineStroke="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-7--stroke--2.svg"
              lineStrokeClassName="group-5"
              text="skills"
            />
            <div className="group-6">
              <Block className="design-component-instance-node-2" />
              <Block
                className="block-instance"
                hasJavascript={false}
                text="Databases"
                text1="Hibernate"
                text2="PostgreSQL"
                text3="Mongo"
              />
              <div className="frame-23">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Frameworks</div>
                </div>
                <img
                  className="line-5"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-13-2.svg"
                />
                <div className="frame-24">
                  <div className="frame-25">
                    <div className="text-wrapper-4">Reactjs</div>
                    <div className="text-wrapper-4">Spring-boot</div>
                  </div>
                  <div className="frame-25">
                    <div className="text-wrapper-4">Flask</div>
                    <div className="text-wrapper-4">Django</div>
                  </div>
                  <div className="frame-26">
                    <div className="text-wrapper-4">Nodejs</div>
                    <div className="text-wrapper-4">Express.js</div>
                  </div>
                </div>
              </div>
              <div className="frame-27">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Other</div>
                </div>
                <img
                  className="line-6"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-13-5.svg"
                />
                <div className="frame-24">
                  <div className="frame-25">
                    <div className="text-wrapper-4">HTML5</div>
                    <div className="text-wrapper-4">CSS</div>
                    <div className="text-wrapper-4">ES6</div>
                  </div>
                  <div className="frame-25">
                    <div className="text-wrapper-4">RESTFUL</div>
                    <div className="text-wrapper-4">APIs</div>
                  </div>
                </div>
              </div>
              <div className="frame-28">
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Tools</div>
                </div>
                <img
                  className="line-5"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-13-2.svg"
                />
                <div className="frame-24">
                  <div className="frame-25">
                    <div className="text-wrapper-4">VSCode</div>
                    <div className="text-wrapper-4">vim</div>
                    <div className="text-wrapper-4">Linux</div>
                  </div>
                  <div className="frame-25">
                    <div className="text-wrapper-4">Figma</div>
                    <div className="text-wrapper-4">Mac</div>
                    <div className="text-wrapper-4">Github</div>
                  </div>
                  <div className="frame-26">
                    <div className="text-wrapper-4">Git</div>
                    <div className="text-wrapper-4">Vagrant</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-7">
              <Dots className="frame-29" />
              <Dots className="frame-30" />
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="logo-2">
                <div className="overlap-group-4">
                  <img
                    className="union-2"
                    alt="Union"
                    src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/union-4.svg"
                  />
                  <img
                    className="union-3"
                    alt="Union"
                    src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/union-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="projects-2">
            <div className="frame-31">
              <Project className="project-instance" />
              <div className="group-8">
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/rectangle-22-1.png"
                />
                <div className="frame-32">
                  <div className="text-wrapper-4">React</div>
                  <div className="text-wrapper-4">Express</div>
                  <div className="text-wrapper-4">Discord.js</div>
                  <div className="text-wrapper-4">Node.js</div>
                </div>
                <div className="frame-33">
                  <div className="chert-nodes">ProtectX</div>
                  <div className="minecraft-servers-2">Discord anti-crash bot</div>
                  <div className="frame-34">
                    <Button stateProp="default" text="Live &lt;~&gt;" type="primary" />
                  </div>
                </div>
              </div>
              <Project
                className="group-9"
                hasFlask={false}
                rectangle="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/rectangle-22.png"
                text="CSS"
                text1="Express"
                text2="Node.js"
                text3="Kahoot Answers Viewer"
                text4="Get answers to your kahoot quiz"
                visible={false}
              />
            </div>
            <div className="group-10">
              <H
                className="design-component-instance-node-2"
                lineStroke="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/line-7--stroke--1.svg"
                text="projects"
              />
              <div className="view-all">View all ~~&gt;</div>
            </div>
          </div>
          <div className="quote">
            <p className="text-wrapper-5">With great power comes great electricity bill</p>
            <img
              className="frame-35"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/frame-49.svg"
            />
            <div className="frame-36">
              <div className="text-wrapper-6">- Dr. Who</div>
            </div>
            <img
              className="frame-37"
              alt="Frame"
              src="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/frame-49.svg"
            />
          </div>
        </div>
        <Footer className="footer-instance" />
        <div className="first">
          <div className="group-11">
            <p className="elias-is-a-web">
              <span className="span">Samuel is a </span>
              <span className="text-wrapper-7">Javascript Engineer</span>
              <span className="span"> and </span>
              <span className="text-wrapper-7">Software Engineer</span>
            </p>
            <p className="text-wrapper-8">My journey as a software engineer began with a deep curiosity for technology and a desire to create innovative solutions. 
            </p>
            <Button className="button-2" stateProp="default" text="Contact me!!" type="primary" />
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <Logo
                className="logo-6"
                img="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/union-1.svg"
                overlapGroupClassName="logo-3"
                style="outline"
                union="https://generation-sessions.s3.amazonaws.com/9338b2cba99f6f2790a78abcc37de20d/img/union-2.svg"
                unionClassName="logo-4"
                unionClassNameOverride="logo-5"
              />
              <img
                className="image-2"
                alt="BlackNight"
                src={BlackNight}
              />
              <Dots className="dots-2" />
            </div>
          </div>
          <div className="frame-38">
            <div className="rectangle-8" />
            <div className="currently-working-on">
              <span className="text-wrapper-9">Currently working on </span>
              <span className="text-wrapper-10">Career Starters</span>
            </div>
          </div>
        </div>
        <Header className="header-instance" />
        <MediaWrapper className="media-instance" />
      </div>
    </div>
  );
};
