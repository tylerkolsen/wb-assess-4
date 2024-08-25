import pokeTypeConvert from "../../public/pokeTypeData"

function TypeCell({ isEditing, value }) {
  let typeArr = []
  for (const type of value) {
    typeArr.push(pokeTypeConvert[type.type.name])
  }

  const typeDisplay = typeArr.map((typeNum) => {
    return <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-v/black-2-white-2/${typeNum}.png`} alt="" />
  })


  return isEditing ? (
    <td>
      Type{/* Placeholder */}
    </td>
  ) : (
    <td>
      {typeDisplay}
      {/* {typeArr.join(', ')} */}
    </td>
  )
}

export default TypeCell