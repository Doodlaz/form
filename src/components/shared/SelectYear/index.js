import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { SelectWrap, ErrorMessage } from './styles'

const SelectYear = ({ text, id, onChange, touched, className, errorMessage, ...inputProps }) => {
  const [year, setYear] = useState(format(new Date(), "yyyy"))
  const [error, setError] = useState(false)

  const createOptions = () => {
    let options = []
    for (let i = format(new Date(), "yyyy"); i > format(new Date(), "yyyy") - 100; i--) {
      options.push(<option key={ i }>{ i }</option>)
    }
    return options
  }

  useEffect(() => {
    touched && setError(Number(year) > format(new Date(), "yyyy") - 18)
  }, [touched, year])


  return (
    <SelectWrap className={ error ? `error ${className}` : className }>
      <label htmlFor={ id }>{ text }</label>
      <select onChange={ e => setYear(e.target.value) } { ...inputProps }>
        { createOptions() }
      </select>
      { error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </SelectWrap>
  )
}

export default SelectYear
