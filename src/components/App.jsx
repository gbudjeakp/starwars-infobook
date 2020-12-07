import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Content from './Content'

function App () {
  const [people, setPeople] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const url = 'https://swapi.dev/api/people'

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url)
      setPeople(result.data)
      setisLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <Content isLoading={isLoading} data={people} />
    </div>
  )
}

export default App
