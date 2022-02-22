const User = require('../models/user');

exports.post_create_user = (req, res) => {
  console.log(`Creating: ${req.body.username}`);

  const user = new User({
    username: req.body.username,
  });

  user.save((err) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log(`User '${user.username}' created successfully!`);

    res.json({
      username: user.username,
      id: user._id,
    });
  });
};

exports.get_logs = (req, res) => {
  res.send('get logs');
};
