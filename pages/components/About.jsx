import React, { Fragment } from "react";
import Image from 'next/image'

const About = (props) => {

  return (
    <Fragment>
      <div className="bd-example">
        <img data-src="holder.js/100px250" className="img-fluid bg" alt="100%x250" src="https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_star-forming_region_carina_nircam_final-5mb.jpg" data-holder-rendered="true"/>
      </div>
      <div className="py-5 text-center">
        <p className="lead">
          Projeto utilizando a API da NASA <a href="https://apod.nasa.gov/apod/astropix.html">APOD (Astronomy Picture of the Day)</a>
        </p>
      </div>
    </Fragment>
  )
}

export default About;