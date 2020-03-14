import React from "react"
// import { Link } from "react-router-dom"

// IMPORT COMPONENTS
import HomeHero from "../components/Home-Hero"
import HomeCards from "../components/Home-Cards"
import HomeAbout from "../components/Home-About"
import Navigation from "../components/Navigation"


function Home() {


  return (
    <div className="fade-in" style={{ display: 0 }}>

      <Navigation />
      <HomeHero />
      <HomeCards />
      <HomeAbout />

    </div>

  )
}

export default Home;