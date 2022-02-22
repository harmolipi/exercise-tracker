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

  let exercises = Exercise.find().where({ user: req.params._id });

  if (req.query.from) {
    console.log(`From: ${req.query.from}`);
    const from = new Date(req.query.from);
    exercises = exercises.where('date').gte(from);
  }

  if (req.query.to) {
    console.log(`To: ${req.query.to}`);
    const to = new Date(req.query.to);
    exercises = exercises.where('date').lte(to);
  }

  if (req.query.limit) {
    console.log(`Limit: ${req.query.limit}`);
    const limit = parseInt(req.query.limit);
    exercises = exercises.limit(limit);
  }

  exercises = await exercises.exec().catch((err) => {
    console.log(err);
    return res.json(err);
  });

  const formatted_exercises = exercises.map((exercise) => {
    return { ...exercise._doc, date: exercise.date_formatted };
  });

  res.json({
    _id: user._id,
    username: user.username,
    count: exercises.length,
    log: formatted_exercises,
  });
};
