import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/common/actions'
import InputText from '../shared/Inputs'
import RadioButton from '../shared/Gender'
import SelectYear from '../shared/SelectYear'
import { validateEmail, validatePassword, validatePostalCode } from '../../utils/validate'

import { FormWrap, FormContent, FormFooter, Paragraph, Title } from './styles'

const Form = () => {
  const dispatch = useDispatch()

  const { formError } = useSelector(({form}) => form)

  const [sending, setSending] = useState(false)
  const [touched, setTouched] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const sendForm = e => {
    e.preventDefault()

    setTouched(true)

    let validate = true

    if (!validateEmail(email)) {
      validate = false
    }
    if (!validatePassword(password)) {
      validate = false
    }
    if (!validatePostalCode(postalCode)) {
      validate = false
    }

    if (validate) {
      setSending(true)
      setTouched(false)

      dispatch(
        actions.signUpReq({
          email,
          password,
          postalCode,
        })
      )
    }
  }



  const handleInputChange = (key, value) => {
    if (key === 'email') {
      setEmail(value)
    }
    if (formError && formError.errors[key]) {
      dispatch(actions.clearFormError())
    }
  }

  return (
    <FormWrap onSubmit={ e => sendForm(e) }>
      <FormContent>
        <Title>Sign up for FREE!</Title>

        <RadioButton text={ 'I am' } />

        <SelectYear
          text={ 'Year of birth' }
          id={ 'year' }
          touched={ touched }
          errorMessage={ `You must be at least 18 year old` } />

        <InputText
          text={ 'E-mail' }
          id={ 'email' }
          value={ email }
          touched={ touched }
          error={ formError ? formError.errors['email'] : null }
          validate={ !validateEmail(email) }
          errorMessage={ formError ? formError.errors['email'] : email.length < 1 ? `This field can't be empty` : `Please include an '@' in the email address` }
          onChange={ value => handleInputChange('email', value) } />

        <InputText
          text={ 'Password' }
          id={ 'password' }
          value={ password }
          touched={ touched }
          validate={ !validatePassword(password) }
          errorMessage={ password.length < 1 ? `This field can't be empty` : `This field must contain at least 8 characters, one capital letter and a number` }
          onChange={ setPassword } />

        <InputText
          text={ 'Postal Code' }
          id={ 'postal-code' }
          maxLength={'5'}
          value={ postalCode }
          touched={ touched }
          validate={ !validatePostalCode(postalCode) }
          errorMessage={ password.length < 1 ? `This field can't be empty` : `Postal Code must be five digits` }
          onChange={ setPostalCode } />

      </FormContent>

      <FormFooter>
        <button aria-label={ 'REGISTER NOW!' } className='btn btn_grad-blue' title="Let's Talk Business">
          <span>REGISTER NOW!</span>
        </button>

        <Paragraph>
          By clicking the button above you agree to our <a href="#" title={ 'Terms of Use' }>Terms of Use </a>
          and <a href="#" title={ 'Privacy Policy' }>Privacy Policy</a> including use of cookies.
        </Paragraph>
      </FormFooter>
    </FormWrap>
  )
}

export default Form