import React, { useState, useEffect } from 'react'
import { InputWrap, ErrorMessage } from './styles'

const InputText = ({ text, id, onChange, value, touched, validate, className, errorMessage, error, ...inputProps }) => {
  const [_error, setError] = useState(false)
  useEffect(() => {
    if (error) {
      setError(true)
    }
  }, [error])

  useEffect(() => {
    touched && setError(validate)
  }, [touched])

  return (
    <InputWrap className={ _error ? `error ${className}` : className }>
      <label htmlFor={ id }>{ text }</label>
      <input
        id={ id }
        type={ 'text' }
        value={ value }
        autoComplete={ 'new-password' }
        onBlur={() => setError(validate) }
        onFocus={() => setError(validate) }
        onChange={ e => { setError(validate); onChange(e.target.value)} }
        {...inputProps}/>
      { _error && <ErrorMessage>{ errorMessage }</ErrorMessage> }
    </InputWrap>
  )
}

export default InputText
