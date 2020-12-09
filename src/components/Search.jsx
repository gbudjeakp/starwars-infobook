import React, { useState } from 'react'

function Search ({ getQuery }) {
  const [text, setText] = useState('')

  function onChange (q) {
    setText(q)
    getQuery(q)
  }
  return (
    <div>
      <div className='search'>
        <form>
          <input
            placeholder='Search Character'
            type='text'
            autoFocus
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default Search
