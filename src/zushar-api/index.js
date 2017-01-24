/*
* created by waweru
* */

'use strict';

const express = require('express');
const Router = express.Router();
const user = require('./users');
const forms = require('./forms');

/*
* @desc:
*   api configurations and library settings
* */
require('./lib/logger').debug('Welcome to the zushar web services api.');

/*
* @desc:
*   api endpoints
* */
Router.get('/', (req, res) => {
  
  res.json({
    message: 'Welcome to the zushar backend services for the tool. :)',
    app: 'zushar web services',
    version: process.env.VERSION,
    author: 'John Waweru <wambugu.john.waweru@outlook.com>',
    license: process.env.LICENSE,
  });
});

/*
* @desc:
*   user management services
* */
Router.use('/user', user);

/*
* @desc:
*   forms management services
* */
Router.use('/forms', forms);

//# expose api to the web server
module.exports = Router;