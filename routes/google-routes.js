const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/google-controller');

router.get('/userData', (req, res) => {
  const accessToken = req.query.accessToken;
  getUserData(accessToken).then((resp) => res.json(resp));
});

module.exports = router;
