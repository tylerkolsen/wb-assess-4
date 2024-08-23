import React from 'react'

// There are two states: delete/change, or save after editing
function ModeButtons({ isEditing }) {

  return isEditing ? (
    <td>
      <button>Save</button>
    </td>
  ) : (
    <td>
      <button>Delete</button>
      <button>Change</button>
    </td>
  )
}

export default ModeButtons