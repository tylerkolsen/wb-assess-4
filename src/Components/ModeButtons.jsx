import React from 'react'

// There are two states: delete/change, or save after editing
function ModeButtons({ isEditing, editClick, saveClick, deleteFunc }) {

  return isEditing ? (
    <td>
      <button onClick={saveClick}>Save</button>
    </td>
  ) : (
    <td>
      <button onClick={deleteFunc}>Delete</button>
      <button onClick={editClick}>Change</button>
    </td>
  )
}

export default ModeButtons