import React from 'react'

// There are two states: delete/change, or save after editing
function NicknameCell() {
  const isEditing = false

  return isEditing ? (
    <td>
      <input type="text" />
    </td>
  ) : (
    <td>
      Nickname
    </td>
  )
}

export default NicknameCell