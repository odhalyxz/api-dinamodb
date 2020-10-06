const express = require("express");
const router = express.Router();

const {UserController} = require('../controllers/users')


// New Kdrama
router.post("/api/newUser", UserController.newUser );
router.get('/', function(req, res) {
    res.send('hello world');
  });
  
router.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

module.exports = router;

