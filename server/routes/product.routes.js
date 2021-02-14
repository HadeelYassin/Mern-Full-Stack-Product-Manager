const ProductController = require('../controllers/products.controllers');
module.exports = function(app){
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/allproducts', ProductController.getAllProduct);
    app.get('/api/product/:id', ProductController.getProduct);
}
