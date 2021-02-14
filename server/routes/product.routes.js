const ProductController = require('../controllers/products.controllers');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
}