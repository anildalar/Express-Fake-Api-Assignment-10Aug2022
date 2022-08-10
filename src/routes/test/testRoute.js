const express = require('express');
const { testController } = require('../../controllers/testController');

const testRoute = express.Router();

//object.get(rotuename,middlewarefunction1,..,handleFunction);

// JS HOF

testRoute.get('/test/orders',testController);

exports.testRoute = testRoute



