/*----- Imports -----*/
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './db/connection.js';
import { cardRoutes } from './routes/cardRoutes.js';
import { cartRoutes } from './routes/cartRoutes.js';
import { deckRoutes } from './routes/deckRoutes.js';

/*----- Global Variables -----*/
const PORT = process.env.PORT || 4000;
const app = express();

/*-----Server Setup -----*/
app.use(express.json());
app.use(cors());
dotenv.config();


/*----- Routes -----*/
cardRoutes(app);
cartRoutes(app);
deckRoutes(app);

/*----- Running the server -----*/
app.listen(PORT, () => {
    console.log('Server is running');
});