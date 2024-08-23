import React from 'react'

// There are two states: delete/change, or save after editing
function NicknameCell({ isEditing, value, onValueChange }) {

  return isEditing ? (
    <td>
      <input 
        type="text" 
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

export default NicknameCell