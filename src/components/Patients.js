import { Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'

function Patients() {
  return (
    <div>
      <Typography variant='overline'>Patients</Typography>
      <Button
        variant='contained'
      >getPatients</Button>
    </div>
  )
}

export default Patients