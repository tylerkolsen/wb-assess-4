import React from 'react'

function AddRowButton() {
  return (
    <tr>
      <td></td>{/* Leave blank for formatting purposes */}
      <td></td>
      <td colSpan={6}>
        <button>Add Pokemon</button>
      </td>
    </tr>
    
  )
}

export default AddRowButton