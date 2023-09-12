import * as Path from 'node:path'

import express from 'express'

import {
  getAllAnimals,
  getAnimalById,
  addAnimal,
  updateAnimal,
  deleteAnimal,
} from './db/db'

const server = express()
server.use(express.json())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

server.get('/api/animals', async (req, res) => {
  const animals = await getAllAnimals()
  res.json(animals)
})

server.get('/api/animals/:id', async (req, res) => {
  const { id } = req.params
  const animal = await getAnimalById(Number(id))
  if (!animal) {
    return res.status(404).json({ error: 'Animal not found' })
  }
  res.json(animal)
})

server.post('/api/animals', async (req, res) => {
  const newAnimal = req.body
  const animal = await addAnimal(newAnimal)
  res.json(animal)
})

server.put('/api/animals/:id', async (req, res) => {
  const { id } = req.params
  const updatedAnimal = { ...req.body, id: Number(id) }
  await updateAnimal(updatedAnimal)
  res.json(updatedAnimal)
})

server.delete('/api/animals/:id', async (req, res) => {
  const { id } = req.params
  await deleteAnimal(Number(id))
  res.status(204).end()
})

export default server
