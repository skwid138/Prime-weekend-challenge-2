// requires
var router = require('express').Router();

// global array of people
var personArray = [];

// router
router.get('/', function (req, res) {
    console.log('in get person route');
    res.send(personArray);
});

router.post('/', function (req, res) {
    console.log('person POST route hit: ', req.body);
    personArray.push(req.body);
    console.log('personArray ->', personArray);
    res.sendStatus(201);
});

// export
module.exports = router;