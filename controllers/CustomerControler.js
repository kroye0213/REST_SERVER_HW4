const Customer = require("../models/customer");
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
exports.postAddCustomer = (req, res, next) =>{
    console.log("FL0 ->"); console.log(req.body);
    let ID = req.body.CustomerID;
    let name = req.body.CustomerName;
    let email = req.body.CustomerEmail;

    let obj ={ID, name, email};
    console.log("FL1 ->"); console.log(obj);
    const customer = new Customer (ID,name,email);
    customer.save();
}
exports.deleteCustomer = (req, res, next) => {
    const custId = req.params.id;

    Customer.delete(custId)
        .then(result => {
            if (result.affectedRows > 0) {
                res.status(200).json({ message: 'Customer deleted successfully' });
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        })
        .catch(err => {
            console.log('DB Error:');
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
        });

};
exports.updateCustomer = async (req, res) => {
  const custId = req.params.id;
  const { CustomerName, CustomerEmail } = req.body;

  try {
    const updatedCustomer = await Customer.update(
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
    console.error('DB Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



