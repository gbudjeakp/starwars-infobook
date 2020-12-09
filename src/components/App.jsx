import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import People from './People'

function App () {
  const [people, setPeople] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const url = 'https://swapi.dev/api/people'

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url)
      setPeople(res.data.results)
      console.log(res.data.result)
      setisLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <People isLoading={isLoading} people={people} />
    </div>
  )
}

export default App
