const actions = {
  SIGN_UP_REQ: 'SIGN_UP_REQ',
  signUpReq: body => ({
    type: actions.SIGN_UP_REQ,
    body,
  }),

  SET_FORM_ERROR: 'SET_FORM_ERROR',
  setFormError: error => ({
    type: actions.SET_FORM_ERROR,
    error,
  }),

  clearFormError: () => ({
    type: actions.SET_FORM_ERROR,
    error: null,
  }),
}

export default actions
