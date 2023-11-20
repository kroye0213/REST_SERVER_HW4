const db = require("../util/database");

module.exports = class sales {
    constructor( id,itemName,price ) {
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
      return db.execute( "select * from sales");
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