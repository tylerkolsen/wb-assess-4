import React from 'react'

function LevelCell({ isEditing }) {

  return isEditing ? (
    <td>
      <input type="text" />
    </td>
  ) : (
    <td>
      Level
    </td>
  )
}

export default LevelCell