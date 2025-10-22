import "./resume.css";

function Resume() {
  const handleDownload = () => {
    window.open("/files/Ayashwanthsaianumula_resume.pdf", "_blank");
  };

  return (
    <div className="resume">
      <button onClick={handleDownload} className="resumebtn">
        View / Download Resume
      </button>
    </div>
  );
}

export default Resume;
