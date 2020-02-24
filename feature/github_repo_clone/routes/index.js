const express = require('express');

const Repo = require('../model/Repo');

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Repo.find({}, (err, allRepos) => {
    if (err) return res.json({ msg: "couldn't find repos" });
    return res.json({ allRepos });
  });
});

module.exports = router;
