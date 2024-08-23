import React from 'react'

function AbilityCell({ isEditing, value }) {
  let abilityArr = []
  for (const abi of value) {
    const fixAbi = (abi.ability.name).replace(/-/g, ' ')
    abilityArr.push(fixAbi)
  }

  return isEditing ? (
    <td>
      Ability{/* placeholder */}
    </td>
  ) : (
    <td>
      {abilityArr.join(', ')}
    </td>
  )
}

export default AbilityCell