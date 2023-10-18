import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  marks: {
    math: [Number],
    phsx: [Number],
  },
  dates: {
    math: [Date],
    phsx: [Date],
  },
});

const User = mongoose.model('User', userSchema);

export default User;
