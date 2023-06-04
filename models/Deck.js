import mongoose from 'mongoose';

const deckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A name is required']
    },
    deck_list: {
        type: Array,
        required: [true, 'A deck list is required']
    }
})

const Deck = mongoose.model('Deck', deckSchema);

export default Deck