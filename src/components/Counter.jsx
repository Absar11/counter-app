import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';

const Counter = () => {

    const count = useSelector( state => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='flex justify-center items-center bg-yellow-200 gap-3 w-full h-screen'>
        <div className='flex border-blue-600'>
        <button className='bg-blue-200 py-1 px-6 font-bold text-2xl border-blue-600' 
        onClick={() => dispatch(increment())}>
            +
        </button>
        <br />
        <br />
        <div className=' bg-slate-200 w-[200px] flex justify-center items-center text-center font-bold text-xl'>{count}</div>
        <br />
        <br />
        <button className='bg-blue-200 py-1 px-6 font-bold text-2xl border-blue-600'  
        onClick={ () => dispatch(decrement())}>
            -
        </button>
        </div>
    </div>
  )
}

export default Counter