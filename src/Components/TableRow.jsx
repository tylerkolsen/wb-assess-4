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
import axios from 'axios'


function TableRow({ initialIsEditing, initialPokeData, deleteFunc}) {
  // State variables. I haven't included the last three, as they aren't able to be changed by the user
  const [editMode, setEditMode] = useState(initialIsEditing)
  const [nickname, setNickname] = useState(initialPokeData.nickname)
  const [level, setLevel] = useState(initialPokeData.level)
  const [pokeName, setPokeName] = useState(initialPokeData.pokeName)
  const [pokeNum, setPokeNum] = useState(initialPokeData.pokeNum)
  const [sprite, setSprite] = useState(initialPokeData.sprite)
  const [ability, setAbility] = useState(initialPokeData.ability)
  const [type, setType] = useState(initialPokeData.type)

  // Functions to set editMode between true and false
  const changeEditMode = () => setEditMode(true)
  const changeNormalMode = () => {
    const bodyObj = {
      id: initialPokeData.id,
      nickname,
      level,
      pokeName,
      pokeNum
    }
    if (level < 1 || level > 100) {
      return alert('Please ensure the level is between 1-100')
    }

    if (pokeName && pokeNum) {
      setNickname(nickname)
      setLevel(level)

      setEditMode(false)
    } else {
      pokeName ? (
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((res) => {
          return axios.put('api/editPokemon', {
            id: initialPokeData.id,
            nickname,
            level,
            pokeName: res.data.name,
            pokeNum: res.data.id,
            sprite: res.data.sprites,
            ability: res.data.abilities,
            type: res.data.types,
          })
        }).then((res) => {
          let response = res.data.updatedPokemon
          setNickname(response.nickname)
          setLevel(response.level)
          setPokeName(response.pokeName)
          setPokeNum(response.pokeNum)
          setSprite(response.sprite)
          setAbility(response.ability)
          setType(response.type)

          setEditMode(false)
        }).catch(() => {
          alert('An error occurred. Please check your name spelling')
        })
      ) : (
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
        .then((res) => {
          return axios.put('api/editPokemon', {
            id: initialPokeData.id,
            nickname,
            level,
            pokeName: res.data.name,
            pokeNum: res.data.id,
            sprite: res.data.sprites,
            ability: res.data.abilities,
            type: res.data.types,
          })
        }).then((res) => {
          let response = res.data.updatedPokemon
          setNickname(response.nickname)
          setLevel(response.level)
          setPokeName(response.pokeName)
          setPokeNum(response.pokeNum)
          setSprite(response.sprite)
          setAbility(response.ability)
          setType(response.type)

          setEditMode(false)
        }).catch(() => {
          alert('An error occurred. Please check your selected number')
        })
    )}
   

    // axios.put('/api/editPokemon', bodyObj)
    //   .then((res) => {

    //   })
  }

  return (
    <tr>
      <td className="frontBorder"></td>
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
        value={sprite}
      />
      <AbilityCell 
        isEditing={editMode}
        value={ability}
      />
      <TypeCell 
        isEditing={editMode}
        value={type}
      />
      <td className="backBorder"></td>
    </tr>
  )
}

export default TableRow