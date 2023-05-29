import dotenv from 'dotenv';
import mongoose from 'mongoose';

import cards from '../data/cards.json' assert { type: 'json' };

import Card from '../../models/Card.js';

const cardData = [];

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);
const environment = process.env[2] || process.env.ENVIRONMENT;
let db = mongoose.connection;

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(MONGODB_URI, mongooseConfig)


cards.forEach((card) => {
    cardData.push(
        {
            id: card.id,
            name: card.name,
            type: card.type,
            desc: card.desc || "N/A",
            atk: card.atk || zeroCheck(card.atk),
            def: card.def || zeroCheck(card.def),
            level: card.level || zeroCheck(card.level),
            scale: card.scale || zeroCheck(card.scale),
            linkval: card.linkval || -1,
            race: card.race || "N/A",
            attribute: card.attribute || "N/A",
            archetype: card.archetype,
            card_image: card.card_images[0].image_url,
            card_price: lowestCardPrice(card.card_prices[0])
        }
    )
});

/*----- Seeding the database -----*/
export async function seedDatabase () {
    await Card.deleteMany({})
    .then((response) => {
        console.log('Card Deleted');
    })

    for (let i = 0; i < cardData.length; i++) {
        Card.create(cardData[i]);
    }
}



/*----- Functions -----*/
function zeroCheck (num) {
    if (!num && num !== 0) {
        return -1;
    } else {
        return num;
    }
}

function lowestCardPrice (priceObj) {
    let finalPrice;
    
    for (const [key, value] of Object.entries(priceObj)) {
        if (!finalPrice || Number(value) < finalPrice) {
            finalPrice = Number(value);
        }
    }

    if (finalPrice <= 0) {
        return 0.01;
    }else {
        return finalPrice
    }
}

/*----- DB Connection -----*/
db.on('connected', async () => {
    console.log(`Connected to MongoDB: name:${db.name} host:${db.host} port:${db.port}`);
    await seedDatabase();
})