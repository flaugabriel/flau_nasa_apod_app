import React,{ useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker,{registerLocale} from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

const FormForSearch = ({search}) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="col-md-4 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-default">Busque por uma data</span>
        <span className="badge bg-dark rounded-pill">🚀</span>
      </h4>

      <form className="card p-2">
      <div className="row">
        <div className="col-md-12">
          <ReactDatePicker
            selected={startDate}
            locale={ptBR}
            dateFormat="dd MMMM yyyy"
            id="datepicker" 
            onChange=
              {(date) => setStartDate(date)} className="form-control" value={startDate}/>
            <div className="mb-3"></div>
            <a className="w-100 btn btn-success btn-lg" onClick={() => search(startDate)}>Buscar</a>
        </div>
      </div>
      </form>
    </div>
  )
}

export default FormForSearch;