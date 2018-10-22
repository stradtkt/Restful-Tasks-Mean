const router = require('express').Router();
const path = require('path');

router.all('*', (req, res) => {
  console.log("Catching a route");
  res.sendFile(path.resolve('dist/public/index.html'));
});

module.exports = router;
