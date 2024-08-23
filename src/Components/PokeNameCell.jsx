import React from 'react'

function PokeNameCell({ isEditing, value, onValueChange, oppositeChange }) {

  const multiChange = (e) => {
    onValueChange(e.target.value)
    oppositeChange('')
  }

  return isEditing ? (
    <td>
      <input 
        type="text" 
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

export default PokeNameCell