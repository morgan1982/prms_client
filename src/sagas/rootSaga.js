
import { all } from 'redux-saga/effects'
import patientsSaga from './PatientsSaga'

export default function *rootSaga() {
  yield all([
    patientsSaga()
  ])
}