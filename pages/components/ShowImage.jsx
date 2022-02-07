import React,{ useState } from "react";
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";

const ShowImage = ({url, explanation, title, date}) => {
  var date_of_image = new Date(date?.toString());
  var month_pt = ['janeiro','fevereiro','março','abril','maio', 'junho','julho','agosto','setembro','outubro','novembro','dezembro']

  const text_default = (date_of_image) => {
    var today = new Date();
    return today !== date_of_image ? 'Imagem de hoje' : ''
  }

  return (
    <div className="col-md-8 col-lg-8 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-default">{text_default} retirada pela nasa em {date_of_image.getDay()} de {month_pt[date_of_image.getMonth()]} de {date_of_image.getFullYear()}</span>
        <span className="badge bg-dark rounded-pill">🛰</span>
      </h4>
      <h5>{title}</h5>
      <p>{explanation}</p>
      <Image src={url} alt={title} width={1000} height={1000} />
    </div>
  )
}

export default ShowImage;