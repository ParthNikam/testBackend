import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from "cors";



const app = express();
const PORT = 5000;


//SxMpEzOldVfJh9C0
// MongoDB Connection

const uri = "mongodb://127.0.0.1/USERS";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Import and use the users route
import usersRoute from './routes/users.js';
app.use('/', usersRoute);




// // Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
