import mongoose from 'mongoose';
import { cardSchema } from './Card.js';

const deckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name is required']
    },
    main_deck_list: {
        type: Array,
        required: [true, 'A main deck list is required']
    },
    extra_deck_list: {
        type: Array,
        required: true
    }
})

const Deck = mongoose.model('Deck', deckSchema);

export default Deck