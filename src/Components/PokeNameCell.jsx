import React from 'react'

function PokeNameCell({ isEditing }) {

  return isEditing ? (
    <td>
      <input type="text" />
    </td>
  ) : (
    <td>
      PokeName
    </td>
  )
}

export default PokeNameCell