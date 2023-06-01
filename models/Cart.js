import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
    item: {
        type: String,
        required: [true, 'The name of the item is required']
    },
    quantity: {
        type: Number,
        required: [true, 'The quantity is required']
    },
    price: {
        type: Number,
        required: [true, 'A price is required']
    }
})

const cartSchema = mongoose.Schema({
    cart: [itemSchema]
})

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;