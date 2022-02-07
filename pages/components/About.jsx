import React from "react";
import Image from 'next/image'

const About = (props) => {

  return (
    <div className="py-5 text-center">
      <Image src="https://apod.nasa.gov/apod/image/2202/bluemarble_apollo17_960.jpg" alt="2022 fev 02" width={200} height={200} />
      <h2>Olá seja bem vindo!</h2>
      <p className="lead">
        Projeto utilizando a API da NASA <a href="https://apod.nasa.gov/apod/astropix.html">APOD (Astronomy Picture of the Day)</a>
      </p>
    </div>
  )
}

export default About;