const router = require('express').Router();
let Pupil = require('../models/pupil.model');

router.route('/').get((req, res) => {
  Pupil.find()
    .then(pupils => res.json(pupils))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const pupilname = req.body.pupilname;

  const newPupil = new Pupil({pupilname});

  newPupil.save()
    .then(() => res.json('Pupil added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;