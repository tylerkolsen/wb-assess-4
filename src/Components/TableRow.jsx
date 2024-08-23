import React from 'react'
import ModeButtons from './ModeButtons'
import NicknameCell from './NicknameCell'
import LevelCell from './LevelCell'
import PokeNameCell from './PokeNameCell'
import PokeNumCell from './PokeNumCell'
import SpriteCell from './SpriteCell'
import AbilityCell from './AbilityCell'
import TypeCell from './TypeCell'

function TableRow() {
  return (
    <tr>
      <ModeButtons />
      <NicknameCell />
      <LevelCell />
      <PokeNameCell />
      <PokeNumCell />
      <SpriteCell />
      <AbilityCell />
      <TypeCell />
    </tr>
  )
}

export default TableRow