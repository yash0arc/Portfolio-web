import "./project.css";
import leftimg from "./assets/leftimg.png";
import rightimg from "./assets/rightimg.png";
import buttonimg from "./assets/buttonimg.png";
import backimg from "./assets/background.png";
import { useState } from "react";

function Projects() {
  const projectTitles = [
    "Portfolio site",
    "Job Portal",
    "Hangman Game",
    "ML project",
  ];

  const projectSynopsis = [
    "A portfolio website is a simple online space where someone can showcase who they are and what they do. It helps others understand their work, skills, and achievements in an easy and professional way.",
    "Work in progress.........",
    "Hangman is a classic word-guessing game built using Java Swing GUI. The player guesses letters to reveal a hidden word, with a limited number of attempts. It showcases basic Java programming, event handling, and interactive UI logic.",
    "This machine learning model predicts house prices based on features like location, area, and number of rooms. Built using Python with libraries like pandas and scikit-learn, it demonstrates data preprocessing, model training, and prediction on real-world data.",
  ];

  const githubLinks = [
    "https://github.com/yash0arc/Portfolio-web",
    "",
    "https://github.com/yash0arc/Hangman-web",
    "https://github.com/yash0arc/House_price_prediction_model_web",
  ];

  const websiteLinks = [
    "https://portfolio-web.up.railway.app/",
    "",
    "https://hangman-web.up.railway.app/",
    "https://housepricepredictionmodelweb-production.up.railway.app/",
  ];

  const [index, setIndex] = useState(0);

  return (
    <>
      <img className="backimg" src={backimg} />
      <img className="leftimg" src={leftimg} />
      <h1 className="projecttittle">PROJECTS</h1>
      <img className="rightimg" src={rightimg} />

      <div className="projectbtnblock">
        {projectTitles.map((item, idx) => (
          <div key={idx}>
            <button
              onClick={() => setIndex(idx)}
              className="projectbtn"
              value={item}
            >
              <img src={buttonimg} className="projectbtn" />
              <h1 className="projectbtnnames">{item}</h1>
            </button>
          </div>
        ))}
      </div>

      <div>
        <h1 className="syn">Synopsis:</h1>
        <p className="aboutproj">{projectSynopsis[index]}</p>
        <p className="githubtittle">Links:</p>

        <div className="link-buttons">
          {/* GitHub Button */}
          {githubLinks[index] && (
            <button className="githubbtn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={githubLinks[index]}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Github Link
              </a>
            </button>
          )}

          {/* Live Site Button */}
          {websiteLinks[index] && (
            <button className="githubbtn">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={websiteLinks[index]}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Live Site
              </a>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
