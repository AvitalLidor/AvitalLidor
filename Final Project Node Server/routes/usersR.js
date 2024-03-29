const usersRouter = require("express").Router();
const { User, validateUser } = require("../models/users");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const auth = require("../middleware/auth");

usersRouter.get("/me", auth, async (req, res) => {
  //res.json(req.user)
  const user = await User.findById(req.user._id).select("-password");
  console.log(user);
});

usersRouter.post("/", async (req, res) => {
  const err = validateUser(req.body).error;
  if (err) {
    return res.status(400).json({
      errors: err.details.map((d) => d.message),
    });
  }

  let user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    return res.status(400).json({
      message: `${user.email} already exists`,
    });
  }
  user = new User(req.body);

  const salt = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(req.body.password, salt);
  //before saving hash password
  await user.save();
  res.status(201).json(_.pick(user, ["name", "email", "biz", "_id"]));
});

module.exports = usersRouter;
