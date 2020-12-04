import React from 'react'
import axios from 'axios'

function App () {
  const url = 'https://swapi.dev/api/'
  axios.get(url)
    .then(res => {
      console.log(res.data)
    })

  return (
    <div>
      <input placeholder='search' />
      <div>
        <h1>Films</h1>
        <p>Contain information of all the star war films</p>
      </div>

      <div>
        <h1>people</h1>
        <p>Contain information of all the star war Characters</p>
      </div>

      <div>
        <h1>planets</h1>
        <p>Contain information of all the star war planets</p>
      </div>

    </div>

  )
}

export default App
