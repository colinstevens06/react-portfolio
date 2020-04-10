import React from "react"

export default function ProjectsCard(props) {
  return (


    <div className="card" data-aos={props.fade}>
      <div className="row no-gutters">
        <div className={props.order}>
          <img src={props.img} alt="Screenshot of the Note Taker"
            className={(props.order === "col-md-6") ? ("img-fluid img-left") : ("img-fluid img-right")}
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <div className="card-title">{props.name}</div>
                <div className="card-text">
                  <p>{props.text}</p>
                  <p>Features include:</p>
                  <ul>
                    <li>{props.features[0]}</li>
                    <li>{props.features[1]}</li>
                    <li>{props.features[2]}</li>
                  </ul>
                </div>
              </div>
            </div>


            <div className="row mt-2">
              <div className="col-6 d-flex justify-content-center">
                <button className="btn btn-projects">
                  <a href={props.siteURL} target="_blank" rel="noopener noreferrer">See the Site</a>
                </button>
              </div>
              <div className="col-6 d-flex justify-content-center">
                <button className="btn btn-projects">

                  <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>

  )

}
