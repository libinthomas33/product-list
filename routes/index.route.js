const express = require('express');
const router = express.Router();

//routes


router.get('/', (req, res) =>//route to verify the api route is ok
    res.status(200).send('OK')
);


//export default router;
module.exports = router;