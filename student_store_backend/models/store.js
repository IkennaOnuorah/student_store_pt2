const db = require("../db");

class Store {
  static async listProducts() {
    const result = await db.query(
      `
            SELECT * from products
        `
    );
    console.log("result", result);
    return result.rows;
  }
  static async fetchProductsById(productId) {}
}

module.exports = Store;
