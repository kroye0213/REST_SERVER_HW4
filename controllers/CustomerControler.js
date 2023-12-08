const Customer = require("../models/customer");
const Item = require("../models/items");
// let Books = [];

exports.getCustomers = ( req, res, next ) => {
    Customer.fetchAll()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
 }
 exports.getTopCustomers = ( req, res, next ) => {
    Customer.getTopCustomers()
        .then(( rows, fieldData ) => {
            console.log( "ROws="); console.log( rows );
            // res.send( "Is seems ok ");
            // res.send( "Is seems ok ");
            res.status(200).json( rows[0]);

        })
 }

exports.getCustomerDetails = ( req, res, next ) => {
    let id = req.params.id;

    Customer.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            res.status(200).json( rows[0][0]);
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}
exports.addCustomer = async (req, res) => {

  const { CustomerName, CustomerEmail } = req.body;

  try {
    // Assume Customer.update is a function that updates the customer
    const updatedCustomer = await Customer.addCustomerModel(

      CustomerName,
      CustomerEmail
    );

    if (updatedCustomer) {
      res.status(200).json({ message: 'Customer updated successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    console.error('Error updating customer:', err);


    res.status(500).json({ message: 'Internal Server Error' });

  }
};

exports.deleteCustomer = async (req, res, next) => {
  const custId = req.params.id;

  try {
    // Assume Item.delete is a function that deletes the item
    const deletedCust = await Customer.delete(custId);

    if (deletedCust) {
      res.status(200).json({ message: 'Customer deleted successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    console.error('Error deleting Customer:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


exports.updateCustomer = async (req, res) => {
  const custId = req.params.id;
  const { CustomerName, CustomerEmail } = req.body;

  try {
    // Assume Customer.update is a function that updates the customer
    const updatedCustomer = await Customer.updateCustomerModel(
      custId,
      CustomerName,
      CustomerEmail
    );

    if (updatedCustomer) {
      res.status(200).json({ message: 'Customer updated successfully' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (err) {
    console.error('Error updating customer:', err);


    res.status(500).json({ message: 'Internal Server Error' });
     console.log('Customer ID:', custId);
  }
};



