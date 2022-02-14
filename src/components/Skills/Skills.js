import React from "react";
import "./skills.css";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiAntdesign } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skills = () => {
  return (
    <div className="skills-container" id="skill">
      <h1 className="title">SKILLS</h1>
      <div className="skills-box">
        <div className="icon-box">
          <div>
            <FaHtml5 className="icon" />
            <p className="skill-name">HTML 5</p>
          </div>
        </div>
        <div className="icon-box">
          <div>
            <FaCss3Alt className="icon" />
            <p className="skill-name">CSS 3</p>
          </div>
        </div>
        <div className="icon-box">
          <div>
            <SiJavascript className="icon" />
            <p className="skill-name">JavaScript</p>
          </div>
        </div>
        <div className="icon-box">
          <div>
            <FaReact className="icon" />
            <p className="skill-name">ReactJs</p>
          </div>
        </div>
        <div className="icon-box">
          <div>
            <SiAntdesign className="icon" />
            <p className="skill-name">Ant Design</p>
          </div>
        </div>
        <div className="icon-box">
          <div>
            <GrMysql className="icon" />
            <p className="skill-name">My SQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
