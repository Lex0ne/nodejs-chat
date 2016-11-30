'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;

/*
 * GET home page.
 */

function index(req, res) {
  res.render('index', { title: 'Express' });
};