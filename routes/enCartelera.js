let express=require('express');
let router=express.Router();
const enCarteleraController = require('../controllers/enCarteleraController.js');



router.get('/', enCarteleraController.show);


module.exports = router;