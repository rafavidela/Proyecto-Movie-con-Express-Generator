let express=require('express');
let router=express.Router();
const contactoController = require('../controllers/contactoController.js');



router.get('/', contactoController.show);


module.exports = router;