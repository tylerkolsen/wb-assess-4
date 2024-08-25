import React from 'react'
import { useState } from 'react'

function SpriteCell({ isEditing, value }) {
  const [shinyCheck, setShinyCheck] = useState(true)

  const shinySwitch = () => setShinyCheck(!shinyCheck)

  return isEditing ? (
    <td>
      <img src="/pokeball-png-45330.png" width={75} alt="" />
    </td>
  ) : ( shinyCheck ? (
      <td>
        <img src={value.front_default} alt="" onClick={shinySwitch}/>
      </td>
    ) : (
      <td>
        <img src={value.front_shiny} alt="" onClick={shinySwitch}/>
      </td>
    )

  )
}

export default SpriteCell