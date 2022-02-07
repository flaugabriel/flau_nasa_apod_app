import React,{ useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const NotFound = () => {
  return (
    <div className="col-md-8 col-lg-8 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-danger">A data deve ser entre 16 de junho de 1995 e 07 de fevereiro de 2022. &#128125;</span>
      </h4>
    </div>
  )
}

export default NotFound;