import express, { application } from 'express'
import morgan from 'morgan' // Helps with logging for debugging; not necessary
import ViteExpress from 'vite-express'

// Set up express instance as 'app'
const app = express()

// set up middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use(express.json())

import handlerFunctions from './controller.js'

// Routes:

// First endpoint (GET):
// - To serve up an array of our pokemon objects (TEST_DATA)
// - No additional client info needed
// - '/api/pokemon'
// - { message: '', pokemon: []}
app.get('/api/pokemon', handlerFunctions.getPokemon) 

// Second endpoint (POST):
// - Add a new row to our invoice data array
// - Body Object: defined in the testData.js file
// - '/api/addPokemon'
// - Send back the new object with a message:
//  - { message: '', newInvoice: {}}
app.post('/api/addPokemon', handlerFunctions.addPokemon)

ViteExpress.listen(app, 8000, () => console.log("Join us at http://localhost:8000"))