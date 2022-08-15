import React from "react";
import spense from "./images/Spense.png";
import yelp from "./images/YelpCamp.png";

const Projects = () => {
  return (
    <section className="projects">
      <div>
        <img src={spense} alt="" srcset="" className="project_img" />
        <h3>Spense.com</h3>
        <p className="spense_text">
          A project designed by and for writers. Rethinking the way writers are
          paid. Focus more on writing and less on marketing your written
        </p>
      </div>
      <div>
        <img src={yelp} alt="" srcset="" className="project_img" />
        <h3>YelpCamp.com</h3>
        <p className="spense_text">
          A project designed by and for writers. Rethinking the way writers are
          paid. Focus more on writing and less on marketing your written
        </p>
      </div>
    </section>
  );
};

export default Projects;
