const router = require('express').Router();
let Reward = require('../models/reward.model');

router.route('/').get((req, res) => {
  Reward.find()
    .then(rewards => res.json(rewards))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const pupilname = req.body.pupilname;
  const stars = Number(req.body.stars);
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newReward = new Reward({
    pupilname,
    stars,
    description,
    date,
  });

  newReward.save()
  .then(() => res.json('Reward added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Reward.findById(req.params.id)
    .then(reward => res.json(reward))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Reward.findByIdAndDelete(req.params.id)
    .then(() => res.json('Reward deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Reward.findById(req.params.id)
    .then(reward => {
      reward.pupilname = req.body.pupilname;
      reward.stars = Number(req.body.stars);
      reward.description = req.body.description;
      reward.date = Date.parse(req.body.date);

      reward.save()
        .then(() => res.json('Reward updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;