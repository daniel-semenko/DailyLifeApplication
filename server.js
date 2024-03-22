// In order to protect the password in my MongoDB connection URL, it was placed in .env, which is in .gitignore, so the url itself is
// not uploaded, yet it is still utilized by code. Requiring dotenv will load environment variables from env to process.env
require('dotenv').config()

import express from 'express';
import { MongoClient } from 'mongodb';


// Creates an instance of the express server, which will be used to configure routes, middleware, and other settings. 
const app = express();

// either chooses port as requested by the environment, or arbitrary port 5000
const PORT = process.env.PORT || 5000;

// middleware to parse any json data
app.use(express.json());

// mongo connection url
const mongoURL = process.env.MongoURL;