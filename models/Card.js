import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: [true, 'An ID is requried']
    },
    name: {
        type: String,
        required: [true, 'A name is required']
    },
    type: {
        type: String,
        required: [true, 'A type is required']
    },
    desc: {
        type: String,
        required: [true, 'A description is required']
    },
    atk: {
        type: Number,
        required: false
    },
    def: {
        type: Number,
        required: false
    },
    level: {
        type: Number,
        required: false
    },
    scale: {
        type: Number,
        required: false
    },
    linkval: {
        type: Number,
        required: false
    },
    race: {
        type: String,
        required: [true, 'A race is required']
    },
    attribute: {
        type: String,
        required: false
    },
    archetype: {
        type: String,
        required: false
    },
    card_image: {
        type: String,
        required: [true, 'An image is required']
    },
    card_price: {
        type: Number,
        required: [true, 'A price is required']
    }
})

const Card = mongoose.model('Card', cardSchema);

export default Card;