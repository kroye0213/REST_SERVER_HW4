const db = require("../util/database");

module.exports = class sales {
    constructor( id,custID, itemID, quantity, date ) {
        this.SalesID = id;
        this.CustomerID = custID;
        this.ItemID = itemID;
        this.Quantity = quantity;
        this.SalesDate = date;

    }
    save() {
            return db.execute( 'insert into sales (SalesID, CustomerID, ItemID, Quantity, SalesDate) ' +
                'values (?, ?, ?, ?, ?)',
                [this.SalesID, this.CustomerID, this.ItemID, this.Quantity, this.SalesDate]
            )
    }

    static delete( id ) {
        return db.execute( "delete from sales where SalesID = ?",
            [id]
        )
    }
     static fetchAll(){
      return db.execute( "select * from customer");
    }
    static getTopSales(){
      return db.execute('SELECT \n' +
            'DATE_FORMAT(s.SalesDate, "%Y-%m-%d") AS Date, \n' +
            'c.CustomerName, \n' +
            'i.ItemName AS Product, \n' +
            's.Quantity AS Quantity, \n' +
            '(i.ItemPrice * s.Quantity) AS TotalSales \n' +
        'FROM \n' +
            'sales s \n' +
        'JOIN \n' +
            'customer c ON s.CustomerID = c.CustomerID \n' +
        'JOIN \n' +
            'item i ON s.ItemID = i.ItemID \n' +
        'WHERE \n' +
            'MONTH(s.SalesDate) = MONTH(CURDATE()) AND YEAR(s.SalesDate) = YEAR(CURDATE()) \n' +
        'ORDER BY TotalSales DESC;');
    }
    static findById( id ){
        return db.execute( "select * from sales where SalesID = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE customer SET SalesID = ?, CustomerID = ?, ItemID = ?, Quantity = ?, SalesDate = ?  WHERE id = ?",
            [this.SalesID, this.CustomerID, this.ItemID, this.Quantity, this.SalesDate, id ] );
    }
}