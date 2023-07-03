import React from "react";
import { Dots } from "../../components/Dots";
import { Footer } from "../../components/Footer";
import { H } from "../../components/H";
import { Header } from "../../components/Header";
import { Media } from "../../components/Media";
import { Project } from "../../components/Project";
import { Discord } from "../../icons/Discord";
import "./style.css";

export const Projects = () => {
  return (
    <div className="projects">
      <div className="div-2">
        <div className="overlap">
          <div className="background">
            <Dots className="dots-instance" />
            <Dots className="design-component-instance-node" />
            <Dots className="frame-14" hasFrame={false} />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
          </div>
          <div className="complete">
            <div className="frame-15">
              <div className="frame-16">
                <Project
                  className="project-instance"
                  rectangle="https://generation-sessions.s3.amazonaws.com/5703cadc4a5f216905c6e7a913927eae/img/rectangle-22-4@2x.png"
                />
                <Project
                  className="group-2"
                  hasFlask={false}
                  rectangle="https://generation-sessions.s3.amazonaws.com/5703cadc4a5f216905c6e7a913927eae/img/rectangle-22-3@2x.png"
                  text="CSS"
                  text1="Express"
                  text2="Node.js"
                  text3="Kahoot Answers Viewer"
                  text4="Get answers to your kahoot quiz"
                  visible={false}
                />
                <Project
                  className="group-3"
                  rectangle="https://generation-sessions.s3.amazonaws.com/5703cadc4a5f216905c6e7a913927eae/img/rectangle-22-2@2x.png"
                  text="React"
                  text1="Express"
                  text2="Discord.js"
                  text3="ProtectX"
                  text4="Discord anti-crash bot"
                  text5="Node.js"
                  visible1={false}
                />
              </div>
              <div className="frame-16">
                <Project
                  className="project-2"
                  hasFlask={false}
                  rectangle="https://generation-sessions.s3.amazonaws.com/5703cadc4a5f216905c6e7a913927eae/img/rectangle-22-1.png"
                  text="HTML"
                  text1="CSS"
                  text2="JS"
                  text3="Kotik Bot"
                  text4="Multi-functional discord bot"
                  visible={false}
                />
                <Project
                  buttonText="Github &lt;~&gt;"
                  className="project-3"
                  hasFlask={false}
                  rectangle="https://generation-sessions.s3.amazonaws.com/5703cadc4a5f216905c6e7a913927eae/img/rectangle-22.png"
                  text="Vue"
                  text1="TS"
                  text2="Less"
                  text3="Portfolio"
                  text4="You’re using it rn"
                  visible={false}
                />
              </div>
            </div>
            <H className="h-2" text="complete-apps" />
          </div>
          <div className="small">
            <div className="frame-15">
              <div className="frame-16">
                <Project
                  buttonText="Github &lt;~&gt;"
                  className="project-4"
                  hasFlask={false}
                  hasRectangle={false}
                  text="Discord.js"
                  text1="TS"
                  text2="JS"
                  text3="Bot boilerplate"
                  text4="Start creating scalable discord.js bot with typescript in seconds"
                  visible={false}
                />
                <Project
                  buttonText="Github &lt;~&gt;"
                  className="project-5"
                  hasFlask={false}
                  hasRectangle={false}
                  text="VUE"
                  text1="CSS"
                  text2="JS"
                  text3="My blog"
                  text4="Front-end of my future blog website written in vue"
                  visible={false}
                />
                <Project
                  buttonText="Figma &lt;~&gt;"
                  className="project-6"
                  hasFlask={false}
                  hasPython={false}
                  hasRectangle={false}
                  hasScss={false}
                  text="Figma"
                  text3="Chess pro"
                  text4="Figma landing page about service for viewing chess tournaments"
                  visible={false}
                />
              </div>
              <div className="frame-16">
                <Project
                  buttonText="Figma &lt;~&gt;"
                  className="project-4"
                  hasFlask={false}
                  hasPython={false}
                  hasRectangle={false}
                  hasScss={false}
                  text="Figma"
                  text3="Crash protect website"
                  text4="Figma template for website about anti-raid, anti-crash discord bot"
                  visible={false}
                />
                <Project
                  buttonText="Live &lt;~&gt;"
                  className="project-5"
                  hasFlask={false}
                  hasPython={false}
                  hasRectangle={false}
                  text="HTML"
                  text1="CSS"
                  text3="CSS expirements"
                  text4="Collection of my different little projects in css"
                  visible={false}
                />
                <Project
                  buttonText="Github &lt;~&gt;"
                  className="project-7"
                  hasFlask={false}
                  hasPython={false}
                  hasRectangle={false}
                  text="Lua"
                  text1="NeoVim"
                  text3="Web Dev nvim config"
                  text4="Config for neovim perfect for web developer"
                  visible={false}
                />
              </div>
              <div className="frame-16">
                <Project
                  buttonText="Live &lt;~&gt;"
                  className="project-8"
                  hasFlask={false}
                  hasRectangle={false}
                  text="Python"
                  text1="Quart"
                  text2="HTML"
                  text3="Ooku"
                  text4="Simple link shortener with auth"
                  visible={false}
                />
                <Project
                  buttonText="Figma &lt;~&gt;"
                  className="project-6"
                  hasFlask={false}
                  hasPython={false}
                  hasRectangle={false}
                  hasScss={false}
                  text="Figma"
                  text3="School website"
                  text4="Figma template website for my school"
                  visible={false}
                />
              </div>
            </div>
            <H className="h-2" text="small-projects" />
          </div>
        </div>
        <Footer
          className="footer-instance"
          icon={<Discord className="discord-instance" />}
          line="https://generation-sessions.s3.amazonaws.com/5703cadc4a5f216905c6e7a913927eae/img/line-11.svg"
          lineClassName="discord-wrapper"
          logoStyleOutlineClassName="discord-instance-wrapper"
        />
        <div className="title">
          <div className="frame-17">
            <div className="text-wrapper-2">/</div>
            <div className="text-wrapper-3">projects</div>
          </div>
          <div className="text-wrapper-4">List of my projects</div>
        </div>
        <Header className="header-instance" />
        <Media
          className="media-instance"
          lineStroke="https://generation-sessions.s3.amazonaws.com/5703cadc4a5f216905c6e7a913927eae/img/line-10--stroke--1.svg"
        />
      </div>
    </div>
  );
};
