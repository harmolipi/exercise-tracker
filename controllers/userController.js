const User = require('../models/user');

exports.post_create_user = (req, res) => {
  console.log(`creating: ${req.query.username}`);

  const user = new User({
    username: req.query.username,
  });

  user.save((err) => {
    if (err) return console.log(err);
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
