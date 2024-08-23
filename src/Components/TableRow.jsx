import React from 'react'
import ModeButtons from './ModeButtons'
import NicknameCell from './NicknameCell'
import LevelCell from './LevelCell'
import PokeNameCell from './PokeNameCell'
import PokeNumCell from './PokeNumCell'
import SpriteCell from './SpriteCell'
import AbilityCell from './AbilityCell'
import TypeCell from './TypeCell'
import { useState } from 'react'

function TableRow() {
  const [editMode, setEditMode] = useState(false)

  return (
    <tr>
      <ModeButtons 
        isEditing={editMode}
      />
      <NicknameCell 
        isEditing={editMode}
      />
      <LevelCell 
        isEditing={editMode}
      />
      <PokeNameCell 
        isEditing={editMode}
      />
      <PokeNumCell 
        isEditing={editMode}
      />
      <SpriteCell 
        isEditing={editMode}
      />
      <AbilityCell 
        isEditing={editMode}
      />
      <TypeCell 
        isEditing={editMode}
      />
    </tr>
  )
}

export default TableRow