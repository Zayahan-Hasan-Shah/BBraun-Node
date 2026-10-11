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

    static async getAllProducts() {
        try {
            const products = await Product.find({ softDelete: false });
            if (products.length === 0 || !products) {
                return [];
            }
            return products;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to load products");
        }
    }

    static async getProductById(prodId) {
        try {
            const product = await Product.findById(prodId, softDelete = false);
            if (!product) {
                throw new Error("Product not found");
            }
            return product;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to load product");
        }
    }

    static async updateProduct(prodId, prodName, prodCode) {
        try {
            const updatedProd = await Product.findByIdAndUpdate(prodId, {
                Name: prodName,
                Code: prodCode
            }, { new: true });
            if (!updatedProd) {
                throw new Error("Product not found");
            }
            return updatedProd;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to update product");
        }
    }

    static async deleteProductById(prodId) {
        try {
            await Product.findByIdAndUpdate(
                productId,
                {
                    softDelete: true,
                    DeletedAt: new Date()
                },
                { new: true }
            );
            return true;
        } catch (e) {
            console.log(e);
            throw new Error("Failed to delete product");
        }
    }
}

module.exports = ProductService;