import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("This is the homepage!");
})

app.listen(PORT, () => {
    console.log(`The server is running on port: http://localhost:${PORT}`);
})