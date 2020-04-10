import React, { Component } from "react"
import projects from "../../projects.json"
import ProjectsCard from "../Projects-Cards"

class ProjectsCardsWrapper extends Component {
  state = {
    projects: projects
  }

  render() {

    return (

      <div>
        <main className="container projects-container mt-4">
          <h1 className="mb-4" style={{ textAlign: "center" }}>My Projects</h1>
          {this.state.projects.map(project => (
            <ProjectsCard
              key={project.id}
              name={project.name}
              text={project.text}
              features={project.features}
              siteURL={project.siteURL}
              github={project.github}
              img={project.img}
              order={project.order}
              fade={project.fade}
            />
          ))}


        </main>
      </div >


    )
  }

}


export default ProjectsCardsWrapper
