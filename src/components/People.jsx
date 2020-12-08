import React from 'react'

function Content ({ people, isLoading }) {
  return isLoading ? <h1>Loading...</h1>
    : (
      <div>
        <section className='container'>
          {people.map(person => (
            <div key={person.name}>
              <h1>Character</h1>
              <h4>{person.name}</h4>
              <h1>height</h1>
              <h4>{person.height}</h4>
            </div>
          ))}
        </section>
      </div>)
}

export default Content
