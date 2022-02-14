import React from "react";
import "./projects.css";
import pic1 from "../../img/project1.PNG";
import pic2 from "../../img/project2.PNG";
import pic3 from "../../img/project3.PNG";

const Projects = () => {
  return (
    <div className="projects-container" id="project">
      <h1 className="title">PROJECTS</h1>
      <div className="project-container">
        <div className="project-box">
          <div className="project">
            <h1 className="year">2021</h1>
            <img src={pic1} alt="project 1" className="project-img" />
            <h1 className="project-name">COFFEE SHOP</h1>
            <a href="https://nhathiep-isme.github.io/Coffee-shop/">
              View Details
            </a>
          </div>
        </div>
        <div className="project-box">
          <div className="project">
            <h1 className="year">2022</h1>
            <img src={pic2} alt="project 2" className="project-img" />
            <h1 className="project-name">PORTFOLIO</h1>
            <a href="https://nhathiep-portfolio.netlify.app">View Details</a>
          </div>
        </div>
        <div className="project-box">
          <div className="project">
            <h1 className="year">2022</h1>
            <img src={pic3} alt="project 3" className="project-img" />
            <h1 className="project-name">SEARCH GITHUB USERS</h1>
            <a href="https://nhathiep-searchgithubuser.netlify.app">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
