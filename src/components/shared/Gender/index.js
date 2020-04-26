import React from 'react'
import { RadioWrap } from './styles'

const RadioButton = ({ id, text, ...inputProps }) => {


  return (
    <RadioWrap>
      <p>{ text }</p>

      <input type="radio" id="male" name="gender" value="male" />
      <label htmlFor={ 'male' }>Male</label>

      <input type="radio" id="female" name="gender" value="female" />
      <label htmlFor={ 'female' }>Female</label>

      {/*{ error && <ErrorMessage>{errorMessage}</ErrorMessage>}*/}
    </RadioWrap>
  )
}

export default RadioButton
