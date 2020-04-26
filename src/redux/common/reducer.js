import actions from './actions'

const initState = {
  formError: null,
}

const reducer = (state = initState, action) => {

  switch (action.type) {
    case actions.SET_FORM_ERROR:
      return {...state, formError: action.error }
    default:
      return state

  }
}

export default reducer
