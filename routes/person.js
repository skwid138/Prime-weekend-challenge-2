// requires
var router = require('express').Router();

// router
router.get('/', function (reg, res) {
    console.log('in get person route');
    res.send('person route');
});

router.post('/', function (req, res) {
    console.log('in post person route', req.body);
    res.sendStatus(201);
});

// export
module.exports = router;