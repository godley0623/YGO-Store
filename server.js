import express from 'express';
import cors from 'cors';
import connection from './db/connection.js';
import dotenv from 'dotenv';
import Card from './models/Card.js';

const app = express()
app.use(express.json())
app.use(cors());

dotenv.config();
const PORT = process.env.PORT || 4000;


/*----- Get Routes -----*/

//Find all cards
app.get('/', (req, res) => {
    Card.find({})
    .then((response) => {
        res.status(200);
        res.send(response);
    })
    .catch((err) => {
        res.status(404);
        res.send({status: 404, message: 'data not found'});
    })
});

//Find Cards by their archetype
app.get('/archetype/:archetype', (req, res) => {
    let archetype = req.params.archetype;
    Card.find({archetype: archetype})
    .then((response) => {
        res.status(200);
        res.send(response);
    })
    .catch((err) => {
        res.status(404);
        res.send({status: 404, message: 'data not found'});
    })
})

//Find Cards by their name
app.get('/name/:name', (req, res) => {
    let name = req.params.name;
    Card.find({name: name})
    .then((response) => {
        res.status(200);
        res.send(response);
    })
    .catch((err) => {
        res.status(404);
        res.send({status: 404, message: 'data not found'});
    })
})

//Find Cards if they contain the same characters in their name
app.get('/similar/:similar', (req, res) => {
    let similar = req.params.similar;
    Card.find( {name: {$regex : `${similar}`} })
    .then((response) => {
        res.status(200);
        res.send(response);
    })
    .catch((err) => {
        res.status(404);
        res.send({status: 404, message: 'data not found'});
    })
})

/*----- Running the server -----*/
app.listen(PORT, () => {
    console.log('Server is running');
})