const Sales = require("../models/sales");
const Customer = require("../models/customer");
// let Books = [];

exports.getSales = ( req, res, next ) => {
    Sales.fetchAll()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
 }
 exports.getTopSales = ( req, res, next ) => {
    Sales.getTopSales()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
 }

exports.getSalesDetails = ( req, res, next ) => {
    let id = req.params.id;

    Sales.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            res.status(200).json( rows[0][0]);
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}

