import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice'

import Button from '@mui/material/Button';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div>
      <Button 
        variant='contained'
        onClick={() => dispatch(increment())}
        >increment</Button>
      <Button 
        variant='contained'
        onClick={() => dispatch(decrement())}
        >decrement</Button>
    </div>
  )

}

export default Counter;

