const { Schema, model } = require('mongoose')

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    department: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Employee', employeeSchema)
