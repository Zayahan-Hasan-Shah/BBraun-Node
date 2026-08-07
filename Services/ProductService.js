const Product = require("../Models/ProductModel");

class ProductService {
    static async createProduct(prodName, prodCode) {
        try {
            const createProduct = await Product.create({
                Name: prodName,
                Code: prodCode,
            });

            return createProduct;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to create product");
        }
    }
}

module.exports = ProductService;