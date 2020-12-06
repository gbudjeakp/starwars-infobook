import React from 'react'

const Content = ({ people, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {people.map((person) => (
        <h4>{person.name}</h4>
      ))}
    </section>
  )
}

export default Content
