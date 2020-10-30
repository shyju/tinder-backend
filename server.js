import express from 'express';


const app = express();
const port = process.env.PORT || 8001;

app.get('/', (req, res) => {
    res.status(200).send('Hello');
});

app.listen(port, () => console.log(`Listening to port: ${port}`));