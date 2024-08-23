import React from 'react'

function SpriteCell({ isEditing }) {

  return isEditing ? (
    <td>
      Sprite{/* Add placeholder picture */}
    </td>
  ) : (
    <td>
      <img src="https://www.shutterstock.com/image-vector/pokeball-vector-illustration-flat-art-260nw-2066625617.jpg" width={100} alt="" />
    </td>
  )
}

export default SpriteCell