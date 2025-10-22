import "./home.css";
import button from "./assets/bitbutton.png";
import background from "./assets/artwork.png"
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <img className="img1" src={background} />
      <p className="text">HEY!!</p>
      <p className="text1">I'M YASHWANTH</p>
      <p className="text2">u like the interface ?!</p>
      <p className="text3"><p style={{ display: "inline", color: "#D1D8BE" }}>scroll</p>to explore more</p>
      <p className="maintext">Start Here</p>
      <NavLink  to="/projects">
        <img className="button1" src={button} />
        <p className="text4">Projects</p>
      </NavLink>
      <NavLink to="/aboutme">
        <img className="button2" src={button} />
        <p className="text5">Let's talk</p>
      </NavLink>
      <NavLink to="/resume">
        <img className="button3" src={button} />
        <p className="text6">Resume</p>
      </NavLink>
    </>
  );
}
export default Home;
