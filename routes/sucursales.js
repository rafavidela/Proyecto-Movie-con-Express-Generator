let express=require('express');
let router=express.Router();
const sucursalesController = require('../controllers/sucursalesController.js');



router.get('/', sucursalesController.show);


module.exports = router;