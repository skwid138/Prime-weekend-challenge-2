// requires
var router = require('express').Router();
var path = require('path');

//base url
router.get('/', function (req, res) {
    res.sendFile(path.resolve('public/views/index.html'));
}); // end base

// export
module.exports = router;