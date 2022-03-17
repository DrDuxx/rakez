require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Employee = require('./employee.model')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('short'))
app.use(cors())

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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
