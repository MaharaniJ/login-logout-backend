const express = require('express');
const router = express.Router();
const { getAccessToken, getUserData } = require('../controllers/github-controller');

router.get('/accessToken', (req, res) => {
  const code = req.query.code;
  getAccessToken(code).then((resp) => res.json(resp));
});

router.get('/userData', (req, res) => {
  const accessToken = req.query.accessToken;
  getUserData(accessToken).then((resp) => res.json(resp));
});

module.exports = router;
