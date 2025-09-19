const express = require('express')
const dotenv = require('dotenv').config();
const colors = require('colors')
const port = process.env.PORT || 4000
const connectDB = require('./config/db')

const {errorHandler} = require('./middleware/errorMiddleware')

const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes');

connectDB()

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(port, ()=> (`Server Started on port ${port}`))