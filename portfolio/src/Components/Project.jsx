import Resume from "../Images/Resume.pdf"

export default function Project() {
  return (
    <section className="section section__projects">
      <div className="container">
        <h2 className="section--title">My projects</h2>
        <p>
          No projects as of now ☹️
          View my <span tabIndex="1" className="link--accent">
                  <a href={Resume} target="_blank" rel="noopener noreferrer">
                    resume
                  </a>
                </span> instead!
          {/* I enjoy prototyping and building applications. My recent work and
          project are below */}
        </p>
        <div className="project--grid">
          {/* <p>Project Description</p> */}
        </div>
      </div>
    </section>
  );
}
