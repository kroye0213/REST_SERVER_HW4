const db = require("../util/database");

module.exports = class items {
    constructor( id,itemName,price ) {
        this.ItemID = id;
        this.ItemName = itemName;
        this.ItemPrice = price;

    }
    save() {
            return db.execute( 'insert into item (ItemID, ItemName, ItemPrice) ' +
                'values (?, ?, ?)',
                [this.ItemID, this.ItemName, this.ItemPrice]
            )
    }

    static delete( id ) {
        return db.execute( "delete from item where ItemID = ?",
            [id]
        )
    }
     static fetchAll(){
      return db.execute( "select * from item");
    }
    static getTopProducts(){
      return db.execute( 'SELECT i.ItemName, COALESCE(SUM(i.ItemPrice * s.Quantity), 0) AS TotalSales ' +
        'FROM item i LEFT JOIN sales s ON i.ItemID = s.ItemID ' +
        'GROUP BY i.ItemName ' +
        'ORDER BY TotalSales DESC');
    }
    static findById( id ){
        return db.execute( "select * from item where ItemID = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE item SET ItemID = ?, ItemName = ?, ItemPrice = ?  WHERE id = ?",
            [this.ItemID, this.ItemName, this.ItemPrice, id ] );
    }
}