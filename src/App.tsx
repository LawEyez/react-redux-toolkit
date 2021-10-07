import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counterSlice'
import { useFetchBreedsQuery } from './features/dogs/dogSlice'

import './App.css'

function App() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const [numDogs, setNumDogs] = useState(10)

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs)

  const handleClick = () => {
    // dispatch(incremented())
    dispatch(amountAdded(3))
  }

  return (
    <div className="App">
      <h1>Hi Vite</h1>

      <button onClick={handleClick}>
        count is {count}
      </button>

      <div className="">
        <p>Dogs to fetch</p>
        <select value={numDogs} onChange={e => setNumDogs(Number(e.target.value))} name="" id="">
          <option value="5" >5</option>
          <option value="10" >10</option>
          <option value="15" >15</option>
          <option value="20" >20</option>
        </select>
      </div>

      <div className="">
        <p>Number of dogs fetched: {data.length}</p>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>

          <tbody>
            {data.map(breed => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} height={250} alt={breed.name} />

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
