import React from 'react'

function PokeNumCell({ isEditing, value, onValueChange, oppositeChange }) {

  const multiChange = (e) => {
    onValueChange(e.target.value)
    oppositeChange('')
  }

  return isEditing ? (
    <td>
      <input 
        type="number" 
        value={value}
        onChange={(e) => multiChange(e)}
      />
    </td>
  ) : (
    <td>
      {value}
    </td>
  )
}

export default PokeNumCell