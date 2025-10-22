import "./resume.css";
function Resume() {
  const handleDownload = () => {
    window.open("/public/yashwanthsaianumula_resume.pdf", "_blank");
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
