import React from "react"

export default function HomeHero() {
  return (
    <div>
      <section>
        <div className="hero" id="hero" style={{ width: 0 }}>
          <img src="./assets/images/Colin-Stevens-Portfolio-Hero.jpg" alt="Sunrise in Baltimore"
            className="rounded hero-image" data-hero-img="home" />
          <h2 className="headline navbar-fade" style={{ opacity: 0 }}>
            Baltimore Web Developer
        </h2>
        </div>
      </section>
      <div className="slider" id="slider"></div>

    </div>

  )

}
