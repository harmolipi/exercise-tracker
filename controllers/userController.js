const User = require('../models/user');
const Exercise = require('../models/exercise');

exports.get_users = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

exports.post_create_user = async (req, res) => {
  console.log(`Creating user: ${req.body.username}`);

  let user = await User.findOne({ username: req.body.username });

  if (user) {
    console.log(`User '${user.username}' already exists!`);
    return res.json(user);
  } else {
    user = new User({
      username: req.body.username,
    });
  }

  user.save((err) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log(`User '${user.username}' created successfully!`);

    res.json(user);
  });
};

exports.get_logs = async (req, res) => {
  console.log(`Getting logs for user ${req.params._id}`);

  const user = await User.findById(req.params._id).catch((err) => {
    console.log(err);
    return res.json(err);
  });

  const exercises = await Exercise.find({ user: req.params._id }).catch(
    (err) => {
      console.log(err);
      return res.json(err);
    }
  );

  res.json({
    _id: user._id,
    username: user.username,
    count: exercises.length,
    log: exercises,
  });
};
