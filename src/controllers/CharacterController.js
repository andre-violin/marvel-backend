module.exports = {
  index(req, res) {
    return res.json({ msg: "Olá" });
  },

  user(req, res) {
    return res.json({ user: req.query.user });
  }
};
