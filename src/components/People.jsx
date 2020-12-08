import React from 'react'

function Content ({ people, isLoading }) {
  return isLoading ? <h1>Loading...</h1> : <section>
    {people.map(person => (
      <h4 key={person.name}>{person.name}</h4>
    ))}
                                           </section>
}

export default Content
