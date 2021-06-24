import React, { useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'

const InputDateYear = () => {
  const { setDate } = useContext(MovieContext)
  let [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (e) => {
    startDate = setStartDate(e)
    setDate(e.getFullYear())
  }

  return (
    <>
      <DatePicker
        className="input-custom"
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