const express=require('express');
const IndexController = require('../controller/IndexController');
const router=express.Router();


router.get('/',IndexController.home);
router.get('/contact',IndexController.contact);

        
    



module.exports =router;
