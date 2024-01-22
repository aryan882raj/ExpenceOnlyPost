const path = require('path');

const express = require('express');
const ProductController = require('../controllers/expController');

const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','allexp.html'))
});

router.post('/expuser',ProductController.postProduct);
router.delete('/delete-exp/:id',ProductController.DeletePost);
router.get('/get-exp',ProductController.GetAllData);

module.exports = router;