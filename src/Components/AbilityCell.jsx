import React from 'react'

function AbilityCell({ isEditing }) {

  return isEditing ? (
    <td>
      Ability{/* placeholder */}
    </td>
  ) : (
    <td>
      AbilityDis
    </td>
  )
}

export default AbilityCell