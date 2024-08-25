import React from 'react'

function AbilityCell({ isEditing, value }) {
  let abilityArr = []
  for (const abi of value) {
    const fixAbi = (abi.ability.name).replace(/-/g, ' ')
    abilityArr.push(fixAbi)
  }

  let abilities = abilityArr.map((abi, idx) => {
    return <option key={idx} value={abi}>{abi}</option>
  })

  return isEditing ? (
    <td>
      Ability{/* placeholder */}
    </td>
  ) : (
    <td>
      <select name="abilitySel" id="abilitySel">
        {abilities}
        {/* {abilityArr.join(', ')} */}
      </select>
    </td>
  )
}

export default AbilityCell