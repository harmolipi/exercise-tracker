const User = require('../models/user');
const Exercise = require('../models/exercise');

exports.post_create_exercise = async (req, res) => {
  const user = await User.findById(req.params.id);

  const exercise = new Exercise({
    user: user._id,
    description: req.query.description,
    duration: req.query.duration,
    date: req.query.date,
  });

  exercise.save((err) => {
    if (err) return console.log(err);
    res.json({
      _id: user._id,
      username: user.username,
      date: exercise.date_formatted,
      duration: exercise.duration,
      description: exercise.description,
    });
  });
};
