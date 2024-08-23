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
            sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png',
            ability: 'flame-body',
            type: 'bug, fire',
        }
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
                <AddRowButton />
            </tfoot>
        </table>
    </div>
  )
}

export default PokeTable