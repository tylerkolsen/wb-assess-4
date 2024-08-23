import React from 'react'

function TypeCell({ isEditing, value }) {
  let typeArr = []
  for (const type of value) {
    typeArr.push(type.type.name)
  }


  return isEditing ? (
    <td>
      Type{/* Placeholder */}
    </td>
  ) : (
    <td>
      {typeArr.join(', ')}
    </td>
  )
}

export default TypeCell