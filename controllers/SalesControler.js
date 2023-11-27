const Sales = require("../models/sales");
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
exports.postAddSales = (req, res, next) =>{
    console.log("FL0 ->"); console.log(req.body);
     let ID = req.body.SalesID;
    let custID = req.body.CustomerID;
    let itemID = req.body.ItemID;
    let quantity = req.body.Quantity
    let Sales = req.body.SalesDate

    let obj ={ID, custID, itemID, quantity, Sales};
    console.log("FL1 ->"); console.log(obj);
    const sales = new Sales (ID, custID, itemID, quantity, Sales);
    sales.save();
}
exports.deleteSales = (req, res, next) => {
    const saleID = req.params.id;

    Sales.delete(saleID)
        .then(result => {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Sale deleted successfully' });
            } else {
                res.status(404).json({ message: 'Sale not found' });
            }
        })
        .catch(err => {
            console.log('DB Error:');
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
};
