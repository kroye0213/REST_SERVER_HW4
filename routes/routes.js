const express = require('express');
const router = express.Router();
const path = require('path');
const CustomerControler = require("../controllers/CustomerControler")
const ItemControler = require("../controllers/ItemControler");
const SalesControler = require("../controllers/SalesControler");

router.get( '/topcustomers', CustomerControler.getTopCustomers);
router.get( '/customers', CustomerControler.getCustomers);
router.get( '/customers/:id', CustomerControler.getCustomerDetails);
router.put( '/updatecustomers/:id', CustomerControler.updateCustomer);
router.delete( '/deletecustomer/:id', CustomerControler.deleteCustomer);
router.post( '/addcustomers', CustomerControler.addCustomer);

router.get( '/item', ItemControler.getItems);
router.get( '/topitem', ItemControler.getTopItems);
router.get( '/item/:id', ItemControler.getItemDetails);
router.put( '/updateitem/:id', ItemControler.updateItem);
router.delete( '/deleteitem/:id', ItemControler.deleteItem);
router.post( '/additem', ItemControler.addItem);

router.get( '/sales', SalesControler.getSales);
router.get( '/topsales', SalesControler.getTopSales);



exports.routes = router;