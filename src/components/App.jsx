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
      console.log(result)
      setPeople(result.data)
      setisLoading(false)
    }

    fetchData()
  }, [])

  // const url = 'https://swapi.dev/api/'
  // axios.get(url)
  //   .then(res => res.json() {
  //     console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })

  return (
    <div>
      <Header />
      <Content isLoading={isLoading} people={people} />
    </div>

  )
}

export default App
