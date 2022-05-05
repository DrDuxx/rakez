require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Employee = require('./employee.model')
const path = require('path')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('short'))
app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'images')))

mongoose
  .connect(process.env.MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully Connected.')
  })
  .catch((e) => {
    console.log(e)
  })

const PORT = process.env.PORT || 8080

app.get('/api/employees', async (_, res) => {
  try {
    const employees = await Employee.find()
    return res.status(200).json({ data: employees })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong' })
  }
})

app.post('/api/employees', async (req, res) => {
  try {
    const { name, department } = req.body
    const employee = await Employee.create({ name, department })
    return res.status(200).json({ data: employee })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ message: 'Something went wrong' })
  }
})

// MAIN WEBSITE
app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname), 'images', '1.png')
})

app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, 'build', 'index.html'))
  return res.status(200).json({
    name: 'FawzeBouLawze #1',
    description: 'Remember to replace this description',
    image: 'https://rakez.herokuapp.com/images',
    attributes: [
      {
        trait_type: 'Background',
        value: 'bg3',
      },
    ],
    dna: 'cd15ae34717ef3b4dd9bd99eec298718a314808f',
    edition: 1,
    date: 1651735380216,
    compiler: 'HashLips Art Engine - codeSTACKr Modified',
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
