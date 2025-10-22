import "./resume.css";

function Resume() {
  const handleDownload = () => {
    window.open("src/files/yashwanthsaianumula_resume.pdf", "_blank");
  };

  return (
    <div className="resume">
      <button onClick={handleDownload} className="resumebtn">
        Click Here
      </button>
    </div>
  );
}

export default Resume;
