const User = require('../models/user');
const Exercise = require('../models/exercise');

exports.post_create_exercise = async (req, res) => {
  console.log('User id is: ', req.params.id);
  const user = await User.findById(req.params.id);
  console.log(
    `Creating exercise: ${req.body.description} for user ${user._id}, ${user.username}`
  );

  const exercise = new Exercise({
    user: user._id,
    description: req.body.description,
    duration: req.body.duration,
    date: req.body.date,
  });

  exercise.save((err) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }

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
