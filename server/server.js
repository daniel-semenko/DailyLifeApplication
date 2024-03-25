// In order to protect the password in my MongoDB connection URL, it was placed in .env, which is in .gitignore, so the url itself is
// not uploaded, yet it is still utilized by code. Requiring dotenv will load environment variables from env to process.env
require('dotenv').config()

const express = require('express');
const { MongoClient } =require('mongodb');


// Creates an instance of the express server, which will be used to configure routes, middleware, and other settings. 
const app = express();

// either chooses port as requested by the environment, or arbitrary port 5000
const PORT = process.env.PORT || 5000;

// middleware to parse any json data
app.use(express.json());

// mongo connection url
const mongoURL = process.env.MONGO_URL;

console.log('mongoURL const: ', mongoURL);

// Finally, we can initiate the connection to the MongoDB, utilizing the MongoClient.connect() function
MongoClient.connect(mongoURL)
    .then(client => {
        console.log('Connected to MongoDB');
        const db = client.db('DanielsPersonalAppCluster');

        // routes and middleware go here

        // start server
        app.listen(PORT, () => {
            // note: In JS, backticks ` ` are required for embedding expressions (in this case the string containing 
            // the expression ${PORT}, must all be within backticks instead of single/double quotes)
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error =>
        {
            console.error('Error connecting to MongoDB: ', error)
        });