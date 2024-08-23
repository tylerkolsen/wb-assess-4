import React from 'react'

function PokeNumCell({ isEditing, value, onValueChange }) {

  return isEditing ? (
    <td>
      <input 
        type="number" 
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </td>
  ) : (
    <td>
      {value}
    </td>
  )
}

export default PokeNumCell