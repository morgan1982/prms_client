import { createSlice, current } from '@reduxjs/toolkit';

export const patientsSlice = createSlice({
  name: 'patients',
  initialState: [],
  reducers: {
    getPatients: (state, { payload }) => {
      console.log("before", current(state))
      console.log(payload)
      state.concat(payload)
      console.log("adte", current(state));
      return [...state, ...payload]
    }
  }
})


export const { getPatients } = patientsSlice.actions;
export default patientsSlice.reducer;