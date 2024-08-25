import React from 'react'

function AddRowButton({ addClick, rowCheck }) {
  return rowCheck ? (
    <tr>
      <td className="footSelect"></td>
      <td colSpan={8} className="footSelect">Nice looking team you've got there!</td>
      <td className="footSelect"></td>
    </tr>
  ) : (
    <tr>
      <td className="footSelect"></td>
      <td className="footSelect"></td>{/* Leave blank for formatting purposes */}
      <td className="footSelect"></td>
      <td colSpan={6} className="footSelect">
        <button 
          id='addButton'
          onClick={addClick}
        >Add Pokemon</button>
      </td>
      <td className="footSelect"></td>
    </tr>
  )

}

export default AddRowButton