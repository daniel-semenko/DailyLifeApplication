const express = require('express')
const router = express.Router();

let exampleUserProfile = 
{
    username: 'user1',
    email: 'user1@email.com',
    bio: 'This is user1\'s profile bio.'
};

router.get('/', (req, res) =>
    {
    res.status(200).json(userProfile);
    }
);

router.put('/', (req, res) =>
    {
        const { email, bio } = req.body;
        userProfile.email = email;
        userProfile.bio = bio;
        res.status(200).json({message: 'Profile updated successfully'});
    }
);

module.exports = router;