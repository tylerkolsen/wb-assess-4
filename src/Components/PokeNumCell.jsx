import React from 'react'

function PokeNumCell({ isEditing }) {

  return isEditing ? (
    <td>
      <input type="number" />
    </td>
  ) : (
    <td>
      PokeNum
    </td>
  )
}

export default PokeNumCell