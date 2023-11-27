const express = require('express');
const router = express.Router();
const path = require('path');
const CustomerControler = require("../controllers/CustomerControler")
const ItemControler = require("../controllers/ItemControler");
const SalesControler = require("../controllers/SalesControler");

router.get( '/topcustomers', CustomerControler.getTopCustomers);
router.get( '/customers', CustomerControler.getCustomers);
router.get( '/customers/:id', CustomerControler.getCustomerDetails);
router.get( '/updatecustomers/:id', CustomerControler.updateCustomer);
router.get( '/deletecustomer/:id', CustomerControler.deleteCustomer);
router.post( '/customers', CustomerControler.postAddCustomer);

router.get( '/item', ItemControler.getItems);
router.get( '/topitem', ItemControler.getTopItems);
router.get( '/item/:id', ItemControler.getItemDetails);
router.get( '/deleteitem/:id', ItemControler.deleteItems);
router.post( '/item', ItemControler.postAddItem);

router.get( '/sales', SalesControler.getSales);
router.get( '/topsales', SalesControler.getTopSales);
router.get( '/sales/:id', SalesControler.getSalesDetails);
router.get( '/deletesale/:id', SalesControler.deleteSales);
router.post( '/sales', SalesControler.postAddSales);

exports.routes = router;