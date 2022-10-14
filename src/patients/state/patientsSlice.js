import { createSlice, current } from '@reduxjs/toolkit';

export const patientsSlice = createSlice({
  name: 'patients',
  initialState: {
    data: [],
    status: 'idle'
  },
  reducers: {
    getPatients: (state, { payload }) => {
      return {
        ...state,
        data: [ ...payload],
        status: 'succeded'
      }
    }
  }
})

export const selectAllPatients = state => state.patients.data
export const { getPatients } = patientsSlice.actions;
export default patientsSlice.reducer;