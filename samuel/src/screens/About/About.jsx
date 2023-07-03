import React from "react";
import { Block } from "../../components/Block";
import { Dots } from "../../components/Dots";
import { Fact } from "../../components/Fact";
import { Footer } from "../../components/Footer";
import { H } from "../../components/H";
import { Header } from "../../components/Header";
import { Media } from "../../components/Media";
import { Discord } from "../../icons/Discord";
import "./style.css";

export const About = () => {
  return (
    <div className="about">
      <div className="div-2">
        <div className="overlap">
          <div className="background">
            <Dots className="dots-instance" />
            <Dots className="design-component-instance-node" />
            <Dots className="frame-13" hasFrame={false} />
            <div className="rectangle" />
            <div className="rectangle-2" />
          </div>
          <div className="div-3">
            <div className="group-2">
              <div className="overlap-group-3">
                <img
                  className="jc-gellidon"
                  alt="Jc gellidon"
                  src="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/jc-gellidon-e3numcscugo-unsplash-removebg-preview-1--1.png"
                />
                <Dots className="frame-14" />
                <Dots className="frame-15" hasFrame={false} />
              </div>
              <img
                className="line-stroke-2"
                alt="Line stroke"
                src="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-7--stroke-.svg"
              />
            </div>
            <p className="hello-i-m-elias-i-m">
              Samuel Chinonso <strong>ARCHIBONG</strong>!
              <br />
              <br />
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
              scratch and raise them into modern user-friendly web experiences. <br />
              <br />
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been
              helping various clients to establish their presence online. I always strive to learn about the newest
              technologies and frameworks.
            </p>
          </div>
          <div className="skills">
            <H className="h-2" text="skills" />
            <div className="frame-16">
              <Block
                className="block-instance"
                line="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-13-4.svg"
                lineClassName="block-2"
              />
              <div className="frame-17">
                <div className="div-wrapper">
                  <div className="languages-2">Other</div>
                </div>
                <img
                  className="line-5"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-13-4.svg"
                />
                <div className="frame-18">
                  <div className="frame-19">
                    <div className="text-wrapper-2">HTML</div>
                    <div className="text-wrapper-2">CSS</div>
                    <div className="text-wrapper-2">EJS</div>
                    <div className="text-wrapper-2">SCSS</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-2">REST</div>
                    <div className="text-wrapper-2">Jinja</div>
                  </div>
                </div>
              </div>
              <div className="frame-17">
                <div className="div-wrapper">
                  <div className="languages-2">Tools</div>
                </div>
                <img
                  className="line-5"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-13-4.svg"
                />
                <div className="frame-20">
                  <div className="frame-19">
                    <div className="text-wrapper-2">VSCode</div>
                    <div className="text-wrapper-2">Neovim</div>
                    <div className="text-wrapper-2">Linux</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-2">Figma</div>
                    <div className="text-wrapper-2">XFCE</div>
                    <div className="text-wrapper-2">Arch</div>
                  </div>
                  <div className="frame-21">
                    <div className="text-wrapper-2">Git</div>
                    <div className="text-wrapper-2">Font Awesome</div>
                  </div>
                  <div className="frame-21">
                    <div className="text-wrapper-2">KDE</div>
                    <div className="text-wrapper-2">fish</div>
                  </div>
                </div>
              </div>
              <Block
                className="block-instance"
                hasJavascript={false}
                line="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-13-4.svg"
                lineClassName="block-2"
                text="Databases"
                text1="SQLite"
                text2="PostgreSQL"
                text3="Mongo"
              />
              <div className="frame-17">
                <div className="div-wrapper">
                  <div className="languages-2">Frameworks</div>
                </div>
                <img
                  className="line-5"
                  alt="Line"
                  src="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-13-4.svg"
                />
                <div className="frame-18">
                  <div className="frame-19">
                    <div className="text-wrapper-2">React</div>
                    <div className="text-wrapper-2">Vue</div>
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-2">Disnake</div>
                    <div className="text-wrapper-2">Discord.js</div>
                  </div>
                  <div className="frame-21">
                    <div className="text-wrapper-2">Flask</div>
                    <div className="text-wrapper-2">Express.js</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="facts">
            <H className="h-2" text="my-fun-facts" />
            <div className="frame-22">
              <div className="frame-23">
                <Fact />
                <Fact text="I often bike with my friends" />
              </div>
              <div className="frame-23">
                <div className="i-like-winter-more-wrapper">
                  <p className="p">
                    <span className="span">I like </span>
                    <span className="text-wrapper-3">pizza</span>
                    <span className="span"> and </span>
                    <span className="text-wrapper-3">pasta</span>
                  </p>
                </div>
                <div className="i-like-winter-more-wrapper">
                  <p className="p">
                    <span className="span">I was in </span>
                    <span className="text-wrapper-3">Egypt</span>
                    <span className="span">, </span>
                    <span className="text-wrapper-3">Poland</span>
                    <span className="span"> and </span>
                    <span className="text-wrapper-3">Turkey</span>
                  </p>
                </div>
              </div>
              <div className="frame-24">
                <div className="i-like-winter-more-wrapper">
                  <p className="p">
                    <span className="span">My favorite movie is </span>
                    <span className="text-wrapper-3">The Green Mile</span>
                  </p>
                </div>
                <Fact text="I am still in school" />
              </div>
              <div className="frame-23">
                <Fact text="I don’t have any siblings" />
              </div>
            </div>
            <div className="group-3">
              <Dots
                className="frame-25"
                hasDiv={false}
                hasEllipse={false}
                hasEllipse1={false}
                hasFrame1={false}
                visible={false}
              />
              <div className="logo-2">
                <div className="overlap-group-4">
                  <img
                    className="union-2"
                    alt="Union"
                    src="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/union-2.svg"
                  />
                  <img
                    className="union-3"
                    alt="Union"
                    src="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/union-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer
          className="footer-instance"
          icon={<Discord className="discord-instance" />}
          line="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-11.svg"
          lineClassName="discord-wrapper"
          logoStyleOutlineClassName="discord-instance-wrapper"
        />
        <div className="title">
          <div className="frame-26">
            <div className="text-wrapper-4">/</div>
            <div className="text-wrapper-5">about-me</div>
          </div>
          <div className="text-wrapper-6">Who am i?</div>
        </div>
        <Header className="header-instance" />
        <Media
          className="media-instance"
          lineStroke="https://generation-sessions.s3.amazonaws.com/cfc7fd1534b2f8384d7b1b810422b284/img/line-10--stroke--1.svg"
        />
      </div>
    </div>
  );
};
