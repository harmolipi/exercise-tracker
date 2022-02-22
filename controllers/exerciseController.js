const User = require('../models/user');
const Exercise = require('../models/exercise');

exports.post_create_exercise = async (req, res) => {
  console.log(`Creating: ${req.body.description}`);

  const user = await User.findById(req.params.id);

  const exercise = new Exercise({
    user: user._id,
    description: req.body.description,
    duration: req.body.duration,
    date: req.body.date,
  });

  exercise.save((err) => {
    if (err) return console.log(err);

    console.log(`Exercise '${exercise.description}' created successfully!`);

    res.json({
      _id: user._id,
      username: user.username,
      date: exercise.date_formatted,
      duration: exercise.duration,
      description: exercise.description,
    });
  });
};
