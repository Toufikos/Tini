import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config();

connectDB();
const app = express();

if (process.env.NODE_ENV === 'dev') {
    console.log("AAAAA");
  }else{
    console.log("BBBBB");
  }


  if(process.env.MODE_ENV === 'prod'){

    console.log("CCCCC");
  }


const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
