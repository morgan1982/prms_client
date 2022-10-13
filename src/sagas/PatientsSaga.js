import { call, put, takeEvery } from 'redux-saga/effects'
import { getListOfPatients } from '../api/patientsApi'
import { PATIENTS, ERRORS } from '../types'
import { getPatients } from '../patients/state/patientsSlice'

function* getListOfPatientsSaga() {
  try {
    const { data } = yield call(getListOfPatients)
    yield put({type: PATIENTS.GET_PATIENTS_SUCCESS})
    yield put(getPatients(data))
  } catch (error) {
    console.log(error);
    yield put({ type: ERRORS.NET_ERROR})
  }
}

function* patientsSaga() {
  yield takeEvery(PATIENTS.GET_PATIENTS, getListOfPatientsSaga)
}

export default patientsSaga;
