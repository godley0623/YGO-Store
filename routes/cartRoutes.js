import Cart from '../models/Cart.js';

export function cartRoutes (app) {
    /*----- GET Routes -----*/
    app.get('/cart', (req, res) => {
        Cart.find({})
        .then((response) => {
            res.status(200);
            res.send(response);
        })
        .catch((err) => {
            res.status(404);
            res.send({status: 404, message: 'data not found'})
        })
    })

    /*----- POST Routes -----*/
    app.post('/cart/add', (req, res) => {
        Cart.deleteMany({})
        .then((response) => {
            Cart.create(req.body);
            res.status(200);
            res.send({status: 200, message: "An item was added to your cart"});
        })
    })

    /*----- Delete -----*/
    app.delete('/cart/delete', (req, res) => {
        Cart.deleteMany({})
        .then((response) => {
            res.status(200);
            res.send({status: 200, message: "The cart was emptied"});
        })
    })

}