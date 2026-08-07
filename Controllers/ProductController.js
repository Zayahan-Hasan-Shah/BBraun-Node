const ProductService = require("../Services/ProductService");
const { ProductDTO } = require("../DTOs/ProductDTO");

const CreateProduct = async (req, res) => {
    try {
        const prod = new ProductDTO({
            Name: req.body.Name,
            Code: req.body.Code
        });

        await ProductService.createProduct(
            prod.Name,
            prod.Code
        );

        return res.status(201).json({
            message: "Product created successfully",
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error ${e}`
        });
    }
}

module.exports = {
    CreateProduct
};