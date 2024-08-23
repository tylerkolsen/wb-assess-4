import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import AddRowButton from './AddRowButton'
import { useState } from 'react'

let globalId = 2

function PokeTable({ initialData }) {

    const [currentData, setCurrentData] = useState(initialData)

    // Function to create all of the rows from the database
    const rows = currentData.map((poke) => {
        return (
            <TableRow 
                key={poke.id}
                initialIsEditing={false}
                initialPokeData={poke}
                deleteFunc={() => deleteRow(poke.id)}
            />
        )
    })

    // To give our Add Pokemon button the ability to add to 'currentData', we need a function
    const addRow = () => {
        // create a new object to represent a new "row"
        const newRow = {
            id: globalId,
            nickname: '',
            level: 1,
            pokeName: 'larvesta',
            pokeNum: 636,
            sprite: {
                "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/636.png",
                "back_female": null,
                "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/636.png",
                "back_shiny_female": null,
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
                "front_female": null,
                "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/636.png",
                "front_shiny_female": null,
            },
            ability: [
                {
                  "ability": {
                    "name": "flame-body",
                    "url": "https://pokeapi.co/api/v2/ability/49/"
                  },
                  "is_hidden": false,
                  "slot": 1
                },
                {
                  "ability": {
                    "name": "swarm",
                    "url": "https://pokeapi.co/api/v2/ability/68/"
                  },
                  "is_hidden": true,
                  "slot": 3
                }
              ], 
              type: [
                {
                  "slot": 1,
                  "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                  }
                },
                {
                  "slot": 2,
                  "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                  }
                }
              ],
        }
        globalId++
        setCurrentData([...currentData, newRow])
    }

    // Delete function
    const deleteRow = (id) => {
        const filteredData = currentData.filter((el) => el.id !== id)
        setCurrentData(filteredData)
    }

  return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                {rows}
            </tbody>
            <tfoot>
                <AddRowButton addClick={addRow}/>
            </tfoot>
        </table>
    </div>
  )
}

export default PokeTable