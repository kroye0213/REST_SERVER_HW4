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
    static findById( id ){
        return db.execute( "select * from customer where CustomerID = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE customer SET CustomerID = ?, CustomerName = ?, CustomerEmail = ?  WHERE id = ?",
            [this.CustomerID, this.CustomerName, this.CustomerEmail, id ] );
    }
}