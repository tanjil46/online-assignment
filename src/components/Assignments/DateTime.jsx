import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DateTime = () => {
const[finddate,setFindDate]=useState(null)


const handleDate = (date) => {
  setFindDate(date);
  };









    return (
        <div>

       <DatePicker
          selected={finddate}
          onChange={handleDate}
          dateFormat="MMMM d, yyyy"
        />
      </div>
    );
};

export default DateTime;