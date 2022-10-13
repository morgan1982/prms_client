import { configureStore } from "@reduxjs/toolkit";
import  createSagaMiddleware from 'redux-saga'
import counterReducer from './features/counter/counterSlice';
import rootSaga from "./sagas/rootSaga";
import patientsReducer from './patients/state/patientsSlice'

const sagaMiddleware = createSagaMiddleware();


export default configureStore({
  reducer: {
    counter: counterReducer,
    patients: patientsReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware)
  }
})


sagaMiddleware.run(rootSaga)