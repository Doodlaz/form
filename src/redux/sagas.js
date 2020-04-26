import { all } from 'redux-saga/effects'

import form from '../redux/common/saga'

export default function* rootSaga() {
  /* getState */
  yield all([form()])
}
