import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1480);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-screen">
        <div className="crt-lines"></div>
        <div className="crt-glow"></div>
        <div className="mobile-container">
          <h1 className="pixel-title">🚫 ACCESS DENIED</h1>
<p className="pixel-text">
  Mobile device or smaller screen detected...
</p>
<p className="pixel-sub">
  This website is designed for desktop screens. <br />
  Use a full screen desktop or laptop to explore the full experience 🖥️
</p>

        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>
      <Outlet/>
    </>
  )
}

export default App;

