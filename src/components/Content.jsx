import React from 'react'

function Content (props) {
  props.name.map((person, i) => {
    return (
      <div key={i}>
        <h4>{person.name}</h4>
      </div>
    )
  })
}

export default Content
