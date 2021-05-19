import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const InputDateYear = ({ setDate }) => {
  let [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (e) => {
    startDate = setStartDate(e)
    setDate(e.getFullYear())
  }

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        showYearPicker
        dateFormat="yyyy"
        yearItemNumber={6}
      />
    </>
  )
}

export default InputDateYear