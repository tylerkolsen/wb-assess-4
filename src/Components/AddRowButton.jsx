import React from 'react'

function AddRowButton({ addClick, rowCheck }) {
  return rowCheck ? (
    <tr>
      <td colSpan={8}>Nice looking team you've got there!</td>
    </tr>
  ) : (
    <tr>
      <td></td>{/* Leave blank for formatting purposes */}
      <td></td>
      <td colSpan={6}>
        <button 
          onClick={addClick}
        >Add Pokemon</button>
      </td>
    </tr>
  )

}

export default AddRowButton