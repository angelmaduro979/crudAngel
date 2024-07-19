const express=require('express');
const routes=express.Router();
const controllers=require('../controllers/controllers')

routes.get('/', controllers.index)
routes.post('/add', controllers.indexPost)
routes.get('/delete/:id',controllers.delete)
routes.get('/editContact/:id',controllers.editContact)
routes.post('/editCustomerPost/:id',controllers.editContactPost)

module.exports=routes;