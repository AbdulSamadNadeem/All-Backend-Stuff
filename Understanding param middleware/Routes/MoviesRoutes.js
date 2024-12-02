const express = require('express')
const Router = express.Router()
const RoutesControllers = require('../controllers/RouteControllers') 

Router.param('id' , RoutesControllers.CheckID )
// This is the Change

Router.route('/')
     .get(RoutesControllers.getAllReq) 
     .post(RoutesControllers.postReq) 
      

     Router.route('/:id')
     .delete(RoutesControllers.deleteReq) 
     .patch(RoutesControllers.patchReq) 


module.exports=Router