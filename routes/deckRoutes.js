import Deck from '../models/Deck.js';

export function deckRoutes(app) {
    /*----- GET Routes -----*/
    app.get('/deck', (req, res) => {
        Deck.find({})
        .then((response) => {
            res.status(200);
            res.send(response);
        })
        .catch((err) => {
            res.status(404);
            res.send({status: 404, message: "Data not found"});
        })
    })

    app.get('/decklist/:name', (req, res) => {
        Deck.findOne( {name: req.params.name} )
        .then((response) => {
            res.status(200);
            res.send(response);
        })
        .catch((err) => {
            res.status(404);
            res.send({status: 404, message: "Data not found"});
        })
    })

    /*----- POST Routes -----*/
    app.post('/deck/add', (req, res) => {
        Deck.create(req.body)
        .then((response) => {
            res.status(200);
            res.send({status: 200, message: "Deck was createed"});
        })
        .catch((err) => {
            res.status(404);
            res.send({status: 404, message: "Data not found"});
        })
    })

}