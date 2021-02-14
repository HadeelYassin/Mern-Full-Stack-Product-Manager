const { request } = require("express");
const { Product } = require("../models/product.model");

module.exports.createProduct=(request,response)=>{
    const {title,description,price}=request.body;
    Product.create({
        title,
        description,
        price

    })
    .then(product => response.json(product))
        .catch(err => response.json(err));
}


