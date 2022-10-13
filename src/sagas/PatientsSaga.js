import { call, put } from 'redux-saga/effects'
import { getListOfPatients } from '../api/patientsApi'
import { PATIENTS, ERRORS } from '../types'

function* getListOfPatientsSaga() {
  try {
    const res = yield call(getListOfPatients)
    console.log("res saga", res);
    yield put({type: PATIENTS.GET_PATIENTS_SUCCESS})
  } catch (error) {
    console.log(error);
    yield put(ERRORS.NET_ERROR)
  }
}

function* patientsSaga() {

}

export default patientsSaga;
