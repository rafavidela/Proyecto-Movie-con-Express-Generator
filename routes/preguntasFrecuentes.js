let express=require('express');
let router=express.Router();
const masVotadasController = require('../controllers/masVotadasController.js');



router.get('/', masVotadasController.show);


module.exports = router;