const express = require('express');
const router = express.Router();
const path = require('path');
const CustomerControler = require("../controllers/CustomerControler")
const ItemControler = require("../controllers/ItemControler");
const SalesControler = require("../controllers/SalesControler");
router.get( '/customers', CustomerControler.getCustomers);
router.get( '/customers/:id', CustomerControler.getCustomerDetails);
router.get( '/deletecustomer/:id', CustomerControler.deleteCustomer);
router.post( '/customers', CustomerControler.postAddCustomer);

router.get( '/item', ItemControler.getItems);
router.get( '/item/:id', ItemControler.getItemDetails);
router.get( '/deleteitem/:id', ItemControler.deleteItems);
router.post( '/item', ItemControler.postAddItem);

router.get( '/sales', SalesControler.getSales);
router.get( '/sales/:id', SalesControler.getSalesDetails);
router.get( '/deletesale/:id', SalesControler.deleteSales);
router.post( '/sales', SalesControler.postAddSales);


// router.get( '/add-product', adminController.getAddProduct );
// router.post( '/product', adminController.postAddProduct);
// router.get( '/showAdmin', adminController.getProducts);
// router.get( '/deleteItem/:id', adminController.deleteProduct);
// router.get( '/editItem/:id', adminController.editProduct);
// router.post( '/postUpdateProduct', adminController.postUpdateProduct);
// router.post( '/books', booksController.postAddBook);

exports.routes = router;