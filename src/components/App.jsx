import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Search from '../components/Search'
import People from './People'

function App () {
  const [people, setPeople] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')
  const url = `https://swapi.dev/api/people/?search=${query}`

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(url)
      setPeople(res.data.results)
      setisLoading(false)
    }
    fetchData()
  }, [query, url])

  console.log(people)
  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <People isLoading={isLoading} people={people} />
    </div>
  )
}
export default App
