const db = require("../util/database");

module.exports = class customer {
    constructor( id, CustName, email ) {
        this.CustomerID = id;
        this.CustomerName = CustName;
        this.CustomerEmail = email;

    }
    save() {
            return db.execute( 'insert into customer (CustomerID, CustomerName, CustomerEmail) ' +
                'values (?, ?, ?)',
                [this.CustomerID, this.CustomerName, this.CustomerEmail]
            )
    }

    static delete( id ) {
        return db.execute( "delete from customer where CustomerID = ?",
            [id]
        )
    }
    static fetchAll(){
      return db.execute( "select * from customer");
    }
    static getTopCustomers(){
        return db.execute('SELECT c.CustomerID, c.CustomerName, c.CustomerEmail, SUM(i.ItemPrice * s.Quantity) AS TotalSales \n' +
        'FROM customer c \n' +
        'LEFT JOIN sales s ON c.CustomerID = s.CustomerID \n' +
        'LEFT JOIN item i ON s.ItemID = i.ItemID \n' +
        'GROUP BY c.CustomerID \n' +
        'ORDER BY TotalSales DESC;')
    }
    static findById( id ){
        return db.execute( "select * from customer where CustomerID = ?",
            [id] );
    }
   static update ( id ){
        return db.execute( "UPDATE customer SET CustomerID = ?, CustomerName = ?, CustomerEmail = ?  WHERE id = ?",
            [this.CustomerID, this.CustomerName, this.CustomerEmail, id ] );
    }
}