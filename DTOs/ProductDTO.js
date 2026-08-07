class ProductDTO {
    constructor(product){
        this.Name = product.Name;
        this.Code = product.Code;
        this.DeletedAt = product.DeletedAt;
    }
}

module.exports = { ProductDTO };