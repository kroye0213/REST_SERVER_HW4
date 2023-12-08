const Item = require("../models/items");
const Customer = require("../models/customer");
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

 exports.addItem = async (req, res) => {
  const { ItemName, ItemPrice } = req.body;

  try {
    // Assume Customer.update is a function that updates the customer
    const updatedItem = await Item.addItemModel(
      ItemName,
      ItemPrice
    );

    if (updatedItem) {
      res.status(200).json({ message: 'Item updated successfully' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    console.error('Error updating Item:', err);


    res.status(500).json({ message: 'Internal Server Error' });

  }


}
exports.deleteItem = async (req, res, next) => {
  const itemId = req.params.id;

  try {
    // Assume Item.delete is a function that deletes the item
    const deletedItem = await Item.delete(itemId);

    if (deletedItem) {
      res.status(200).json({ message: 'Item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    console.error('Error deleting Item:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

 exports.updateItem = async (req, res) => {
  const itemId = req.params.id;
  const { ItemName, ItemPrice } = req.body;

  try {
    // Assume Customer.update is a function that updates the customer
    const updatedItem = await Item.updateItemModel(
      itemId,
      ItemName,
      ItemPrice
    );

    if (updatedItem) {
      res.status(200).json({ message: 'Item updated successfully' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    console.error('Error updating Item:', err);


    res.status(500).json({ message: 'Internal Server Error' });
     console.log('Item ID:', itemId);
  }
}