import React from 'react'
import TableHeader from './TableHeader'
import TableRow from './TableRow'
import AddRowButton from './AddRowButton'


function PokeTable() {
  return (
    <div>
        <table>
            <thead>
                <TableHeader />
            </thead>
            <tbody>
                <TableRow />
            </tbody>
            <tfoot>
                <AddRowButton />
            </tfoot>
        </table>
    </div>
  )
}

export default PokeTable