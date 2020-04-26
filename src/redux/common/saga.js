import { all, takeEvery, fork, put } from 'redux-saga/effects'
import { API } from '../../services'
import actions from './actions'

export function* sendForm() {
  yield takeEvery(actions.SIGN_UP_REQ, function*(action) {
    try {
      const { body } = action
      const res = yield API.asyncValidate(body)
      if (res.status === 200 || res.status.toLowerCase() === 'success') {

        console.log('success');
      }

    } catch (err) {
      yield put(actions.setFormError(err))
    }
  })
}

export default function* commonSaga() {
  yield all([fork(sendForm)])
}
