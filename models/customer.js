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
        return db.execute("SELECT\n" +
            "    c.CustomerID,\n" +
            "    c.CustomerName,\n" +
            "    c.CustomerEmail,\n" +
            "    SUM(i.ItemPrice * s.Quantity) AS TotalSales\n" +
            "FROM\n" +
            "    customer c\n" +
            "LEFT JOIN\n" +
            "    sales s ON c.CustomerID = s.CustomerID\n" +
            "LEFT JOIN\n" +
            "    item i ON s.ItemID = i.ItemID\n" +
            "GROUP BY\n" +
            "    c.CustomerID\n" +
            "ORDER BY\n" +
            "    TotalSales DESC;\n");
    }
    static findById( id ){
        return db.execute( "select * from customer where CustomerID = ?",
            [id] );
    }

    static updateCustomerModel(id, updatedName, updatedEmail) {
  return db.execute("UPDATE customer SET CustomerName = ?, CustomerEmail = ? WHERE CustomerID = ?",
    [updatedName, updatedEmail, id]
  );
}
static addCustomerModel(name, email) {
    return db.execute('INSERT INTO customer (CustomerName, CustomerEmail) VALUES (?, ?)', [name, email]);

    }

}