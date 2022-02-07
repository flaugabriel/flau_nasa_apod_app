import React,{ useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const NotFound = () => {
  var data = new Date();
  var month_pt = ['janeiro','fevereiro','março','abril','maio', 'junho','julho','agosto','setembro','outubro','novembro','dezembro']

  return (
    <div className="col-md-8 col-lg-8 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-default">Imagem de hoje retirada pela nasa em {data.getDate()} de {month_pt[data.getMonth()]} de {data.getFullYear()}</span>
        <span className="badge bg-dark rounded-pill">🛰</span>
      </h4>
    </div>
  )
}

export default NotFound;