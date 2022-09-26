import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "James",
        lastName: "Thomson",
        age: 25
    }
]

router.get('/', (req, res) => {
    res.send('Hello');
})

export default router;