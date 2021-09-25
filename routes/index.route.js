const express = require('express');
const router = express.Router();

//routes
const categoryRoute = require('./category.route');
const productRoute = require('./product.route');

router.get('/', (req, res) =>//route to verify the api route is ok
    res.status(200).send('OK')
);

router.use('/category', categoryRoute);
router.use('/product', productRoute);


//export default router;
module.exports = router;