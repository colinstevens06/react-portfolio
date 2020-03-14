import React from "react"

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navbar-brand d-flex flex-row align-items-center">
          <h1 className="logo navbar-fade">Colin Stevens</h1>
        </div>

        <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon custom-toggler"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <div className="navbar-nav ml-auto navbar-fade">
            <a className="nav-btn nav-fade" data-url="index.html" href="/">Home</a>
            <a className="nav-btn nav-fade" data-url="projects.html" href="/projects">Projects</a>
            <a className="nav-btn nav-fade" data-url="about.html" href="/about">About</a>
            <a className="nav-btn" href="./assets/PDFs/colin-stevens-resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  )
}