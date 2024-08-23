import React from 'react'

function AddRowButton({ addClick }) {
  return (
    <tr>
      <td></td>{/* Leave blank for formatting purposes */}
      <td></td>
      <td colSpan={6}>
        <button onClick={addClick}>Add Pokemon</button>
      </td>
    </tr>
    
  )
}

export default AddRowButton