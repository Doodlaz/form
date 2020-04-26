/* Regular expressions */

export const regex = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])?[A-Za-z\d@$!%*?&]{8,32}$$/,
  postalCode: /^\d{5}(?:[-\s]\d{4})?$/
}

/* Validation methods */
export const validateEmail = email => regex.email.test(email)

export const validatePassword = password => regex.password.test(password)

export const validatePostalCode = postalCode => regex.postalCode.test(postalCode)