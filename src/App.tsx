import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counterSlice'

import './App.css'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(amountAdded(3))
  }

  return (
    <div className="App">
      <h1>Hi Vite</h1>

      <button onClick={handleClick}>
        count is {count}
      </button>
    </div>
  )
}

export default App
