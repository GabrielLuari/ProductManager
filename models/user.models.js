const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Min lenght is 3 charachter long"]
      },
      Price: {
        type: Number,
        required: [true, "Price is required"]
      }, 
      Description:{
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Min lenght is 3 charachter long"]
      }
    },{timestamps: true});

 
const User = mongoose.model('user',userSchema);
 
module.exports = User;