import "./aboutme.css";
import rightimg from "./assets/rightimg.png";

function Aboutme() {
  return (
    <div className="background">
      <img className="box" src={rightimg} />
      <div className="contact">
        <p>
          <p className="headings">Gmail: </p>{" "}
          <a target="_blank" className="links" href="mailto:Yashwnathsaianumula@gmail.com">
            Yashwnathsaianumula@gmail.com
          </a>
        </p>
        <p>
          <p className="headings">GitHub:</p>{" "}
          <a target="_blank"
            className="links"
            href="https://github.com/yash0arc?tab=repositories"
          >
            github.com/yash0arc
          </a>
        </p>
        <p>
          <p className="headings">LinkedIn:</p>{" "}
          <a target="_blank"
            className="links"
            href="https://www.linkedin.com/in/yashwanth-sai-arc04"
          >
            linkedin.com/in/yash
          </a>
        </p>
        <p>
          <p className="headings">Whatsapp:</p>{" "}
          <a className="numlink">+91 8186853216</a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
