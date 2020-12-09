import React from 'react'
import loading from '../img/loading.gif'

function Content ({ people, isLoading }) {
  return isLoading ? <img src={loading} alt='logo' className='center-loading' />
    : (
      <div>
        <div className='container'>
          {people.map(person => (
            <div key={person.name} className='card'>
              <h1>Character</h1>
              <h4>{person.name}</h4>
              <h1>height</h1>
              <h4>{person.height}</h4>
            </div>
          ))}
        </div>
      </div>)
}

export default Content
