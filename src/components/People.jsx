import React from 'react'
import loading from '../img/loading.gif'

function Content ({ people, isLoading }) {
  return isLoading ? <img src={loading} alt='logo' className='center-loading' />
    : (
      <div>
        <div className='container'>
          {people.map(person => (
            <div key={person.name} className='card'>
              <h1>Name:</h1>
              <h4>{person.name}</h4>
              <h1>height:</h1>
              <h4>{person.height}</h4>
              <h1>Sex:</h1>
              <h4>{person.gender}</h4>
              <h1>Skin Color:</h1>
              <h4>{person.skin_color}</h4>
              <h1>Birth Year:</h1>
              <h4>{person.birth_year}</h4>
            </div>
          ))}
        </div>
      </div>)
}

export default Content
