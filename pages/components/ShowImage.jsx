import React,{ useState } from "react";
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";

const ShowImage = ({url, explanation, title, date}) => {
  var date_of_image = new Date(date?.toString());
  var month_pt = ['janeiro','fevereiro','março','abril','maio', 'junho','julho','agosto','setembro','outubro','novembro','dezembro']

  return (
    <div className="col-md-8 col-lg-8 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-default">{title}</span>
        <span className="badge bg-dark rounded-pill">🛰</span>
      </h4>
      <p>{explanation}</p>
      <p>{date}</p>
      <Image src={url} alt={title} width={1000} height={1000} />
    </div>
  )
}

export default ShowImage;