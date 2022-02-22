const User = require('../models/user');

exports.post_create_user = (req, res) => {
  console.log(req.query.username);
  const user = new User({
    username: req.query.username,
  });
  user.save((err) => {
    if (err) return console.log(err);
    res.send(`user created: ${user.username}`);
  });
};

exports.get_logs = (req, res) => {
  res.send('get logs');
};
