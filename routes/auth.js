const express = require('express')
const router = express.Router();

let users = 
[
    // Dummy Users/Passwords for now, actual AUTH logic will go here
    {id: 1, username:'user1', password: 'pass1'},
    {id: 2, username:'user2', password: 'pass2'},
    {id: 3, username:'user3', password: 'pass3'}
];

router.post('/login', (req, res) =>
    {
        // Dummy AUTH logic, actual AUTH logic will go here
        const { username, password } = req.body;
        const user = users.find(user => user.username === username && user.password === password);
        if (user)
        {
            res.status(200).json({message: `${user.username} Login Successful!`});
        }
        else
        {
            res.status(401).json({message: `ERROR: Invalid Username or Password.`});
        }
    }
);

router.post('/logout', (req, res) =>
    {
        // Dummy Logout Logic, actual logout logic will go here
        res.status(200).json({message: `${user.username} successfully logged out.`});
    }
);

router.post('/register', (req, res) =>
    {
        const { username, password } = req.body;
        users.push({id: users.length + 1, username, password});
        res.status(201).json({message: `Registration Successful`});
    }
);

module.exports = router;