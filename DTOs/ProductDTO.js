class ProductDTO {
    constructor(product){
        this.Name = product.Name;
        this.Code = product.Code;
        this.DeletedAt = product.DeletedAt;
    }
}

class UpdateProductDTO {
    constructor(product){
        this.id = product._id;
        this.Name = product.Name;
        this.Code = product.Code;
    }

}

module.exports = { ProductDTO, UpdateProductDTO };