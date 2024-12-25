const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fullname: {
        firstname: {
            type: String,
            require: true,
            minlength:[3, 'Firstname must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength:[3, 'Lastname must be at least 3 characters long'],
        }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength:[5, 'Email must be at least 5 character long']
    },

    password: {
        type:String,
        required: true,
    },
   socketID: {
    type: String,
   },
})