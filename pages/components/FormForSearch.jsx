import React,{ useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormForSearch = props => {
  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="col-md-4 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-default">Busque por uma data especial</span>
        <span className="badge bg-dark rounded-pill">🚀</span>
      </h4>

      <form className="card p-2">
      <div className="row">
        <div className="col-md-12">
          <DatePicker selected={startDate} onChange=
            {(date) => setStartDate(date)} className="form-control" value={props.value} />
            <div className="mb-3"></div>
            <a className="w-100 btn btn-success btn-lg" onClick={props.handleSearch}>Buscar</a>
        </div>
      </div>
      </form>
    </div>
  )
}

export default FormForSearch;