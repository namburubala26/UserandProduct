
const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/expense');

router.post('/add-expenses' ,usercontroller.addExpense);
router.get('/get-expenses', usercontroller.getExpense);
router.delete('/delete/:id',usercontroller.deleteExpense);
  
  
  module.exports=router;  