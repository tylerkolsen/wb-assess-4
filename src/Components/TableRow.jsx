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
import apiConvert from './apiConvert'

function TableRow({ initialIsEditing, initialPokeData, deleteFunc}) {
  // State variables. I haven't included the last three, as they aren't able to be changed by the user
  const [editMode, setEditMode] = useState(initialIsEditing)
  const [nickname, setNickname] = useState(initialPokeData.nickname)
  const [level, setLevel] = useState(initialPokeData.level)
  const [pokeName, setPokeName] = useState(initialPokeData.pokeName)
  const [pokeNum, setPokeNum] = useState(initialPokeData.pokeNum)

  // Functions to set editMode between true and false
  const changeEditMode = () => setEditMode(true)
  const changeNormalMode = () => setEditMode(false)

  return (
    <tr>
      <ModeButtons 
        isEditing={editMode}
        editClick={changeEditMode}
        saveClick={changeNormalMode}
        deleteFunc={deleteFunc}
      />
      <NicknameCell 
        isEditing={editMode}
        value={nickname}
        onValueChange={setNickname}
      />
      <LevelCell 
        isEditing={editMode}
        value={level}
        onValueChange={setLevel}
      />
      <PokeNameCell 
        isEditing={editMode}
        value={pokeName}
        onValueChange={setPokeName}
        oppositeChange={setPokeNum}
      />
      <PokeNumCell 
        isEditing={editMode}
        value={pokeNum}
        onValueChange={setPokeNum}
        oppositeChange={setPokeName}
      />
      <SpriteCell 
        isEditing={editMode}
        value={initialPokeData.sprite}
      />
      <AbilityCell 
        isEditing={editMode}
        value={initialPokeData.ability}
      />
      <TypeCell 
        isEditing={editMode}
        value={initialPokeData.type}
      />
    </tr>
  )
}

export default TableRow