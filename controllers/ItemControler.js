const Item = require("../models/items");
// let Books = [];

exports.getItems = ( req, res, next ) => {
    Item.fetchAll()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
 }
 exports.getTopItems = ( req, res, next ) => {
    Item.getTopProducts()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
 }

exports.getItemDetails = ( req, res, next ) => {
    let id = req.params.id;

    Item.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            res.status(200).json( rows[0][0]);
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}
exports.postAddItem = (req, res, next) =>{
    console.log("FL0 ->"); console.log(req.body);
    let ID = req.body.ItemID;
    let name = req.body.ItemName;
    let price = req.body.ItemPrice;

    let obj ={ID, name, price};
    console.log("FL1 ->"); console.log(obj);
    const items = new Item (ID,name,price);
    items.save();
}
exports.deleteItems = (req, res, next) => {
    const itemId = req.params.id;

    Item.delete(itemId)
        .then(result => {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Item deleted successfully' });
            } else {
                res.status(404).json({ message: 'Item not found' });
            }
        })
        .catch(err => {
            console.log('DB Error:');
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
        });
};
