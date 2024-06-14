import React from "react";
import styles from "./ProjectsStyle.module.css";
import ProjectCard from "../../common/ProjectCard";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png"

function Projects() {
  return (
    <React.Fragment>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={viberr}
            link="https://www.facebook.com/"
            h3="Viberr"
            p="Streaming App"
          />
          <ProjectCard
            src={freshBurger}
            link="https://www.facebook.com/"
            h3="Fresh Burger"
            p="Hamburger Restaurant"
          />
          <ProjectCard
            src={hipsster}
            link="https://www.facebook.com/"
            h3="Hipsster"
            p="Hamburger Restaurant"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
