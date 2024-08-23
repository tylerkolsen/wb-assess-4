import React from 'react'

function TypeCell({ isEditing }) {

  return isEditing ? (
    <td>
      Type{/* Placeholder */}
    </td>
  ) : (
    <td>
      TypeDis
    </td>
  )
}

export default TypeCell