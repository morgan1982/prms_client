import { useDispatch } from 'react-redux'
import { PATIENTS } from '../types'
import { Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'

function Patients() {
  const dispatch = useDispatch();
  return (
    <div>
      <Typography variant='overline'>Patients</Typography>
      <Button
        variant='contained'
        onClick={() => dispatch({ type: PATIENTS.GET_PATIENTS })}
      >getPatients</Button>
    </div>
  )
}

export default Patients