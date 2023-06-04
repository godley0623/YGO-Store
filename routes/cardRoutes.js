import Card from '../models/Card.js';

export function cardRoutes (app) {
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
        Card.find( {name: {$regex: `${name}`, $options: 'i'} } )
        .then((response) => {
            console.log(response)
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
        Card.find( {name: {$regex: `${similar}`, $options: 'i'} } )
        .then((response) => {
            res.status(200);
            res.send(response);
        })
        .catch((err) => {
            res.status(404);
            res.send({status: 404, message: 'data not found'});
        })
    })

    /*----- PUT Routes -----*/

    app.put('/card/edit/:edit', (req, res) => {
        Card.findOneAndUpdate( {id: Number(req.params.edit)}, req.body )
        .then((response) => {
            res.status(200);
            res.send( {message: 'Card has been edited'} );
        })
        .catch((err) => {
            res.status(404);
            res.send({status: 404, message: 'data not found'});
        })
    })

}